import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Platform,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { RootTabScreenProps } from '../typings/navigationTypes';
import { ReserveType } from '../typings/menuTypes';
import { UserType } from '../typings/userTypes';
import { SERVICE_TYPE } from '../constants/AppConstants';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import CircleText from '../components/common/CircleText';
import CustomButton from '../components/common/CustomButton';
import TimeSelection from '../components/reserve/TimeSelection';
import SpecialRequirementsCheckboxes from '../components/reserve/SpecialRequirementsCheckboxes';
import NumberModifier from '../components/common/NumberModifier';
import ReserveUserDetails from '../components/reserve/ReserveUserDetails';

import { BOOKING } from '../DummyData';

export default function ReserveScreen({
  navigation,
}: RootTabScreenProps<'ReserveScreen'>) {
  const { t } = useTranslation();
  const [timeSelections, setTimeSelections] = useState<string[] | undefined>();
  const [nextButtonPressed, setNextButtonPressed] = useState(false);
  const [currentReservation, setCurrentReservation] = useState<
    ReserveType | undefined
  >();
  const [androidShowDate, setAndroidShowDate] = useState(false);

  const [date, setDate] = useState(new Date());
  const [numPeople, setNumPeople] = useState(1);
  const [serviceType, setServiceType] = useState<string | undefined>();
  const [time, setTime] = useState<string | undefined>();
  const [notes, setNotes] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState<string[]>([]);

  const [user, setUser] = useState<UserType | undefined>({
    firstName: 'Jane',
    lastName: 'Doe',
    mobile: 123456789,
    email: 'janedoe@email.com',
  });

  useEffect(() => {
    // Update reservation times shown based on service type selected
    if (serviceType == SERVICE_TYPE.LUNCH) {
      setTimeSelections(BOOKING.times.lunch);
    } else if (serviceType == SERVICE_TYPE.DINNER) {
      setTimeSelections(BOOKING.times.dinner);
    }
  }, [serviceType]);

  // useEffect(() => {
  //   console.log('currentReservation ' + JSON.stringify(currentReservation));
  // }, [currentReservation]);

  // Handle Next button pressed
  const onNextButtonPressed = () => {
    // Check if all required fields have been selected
    if (date && numPeople && serviceType && time) {
      setCurrentReservation({
        date: date,
        numPeople: numPeople,
        service: serviceType as 'lunch' | 'dinner',
        time: time,
        notes: notes,
        specialRequirements: specialRequirements,
        user: user as UserType,
      });
      setNextButtonPressed(true);
    } else {
      // If not, alert user
      Alert.alert(t('error_alerts.error'), t('error_alerts.complete_fields'), [
        { text: t('buttons.okay') },
      ]);
    }
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);
    }

    if (Platform.OS === 'android') {
      if (
        event.type === 'set' ||
        event.type === 'dismissed' ||
        event.type === 'neutralButtonPressed'
      ) {
        setAndroidShowDate(false);
      }
    }
  };

  const calendarProps = {
    testID: 'dateTimePicker',
    value: date,
    onChange: onChange,
    minimumDate: new Date(),
    maximumDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 4,
      new Date().getDate()
    ),
  };

  return (
    <ScrollView style={styles.container}>
      {!nextButtonPressed ? (
        <>
          {/* Booking calendar */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <View style={styles.titleContainer}>
              <CircleText
                textStyle={{
                  fontFamily: 'caveat-brush',
                  fontSize: VALUES.FONT_SIZE['XLARGE'],
                }}
              >
                1
              </CircleText>
              <View style={{ marginLeft: VALUES.SPACING.SMALL }}>
                <HeaderTitle colour={COLOURS.RED}>
                  {t('reserve.booking')}
                </HeaderTitle>
              </View>
            </View>
            <View style={styles.datePickerContainer}>
              {/* Date picker if Android */}
              {Platform.OS === 'android' && (
                <>
                  <Button
                    onPress={() => setAndroidShowDate(true)}
                    title="Pick date"
                    color={COLOURS.GREEN}
                  />
                  {androidShowDate && <DateTimePicker {...calendarProps} />}
                </>
              )}
              {/* Date picker if iOS */}
              {Platform.OS === 'ios' && (
                <DateTimePicker
                  {...calendarProps}
                  display="inline"
                  accentColor={COLOURS.RED}
                />
              )}
              <Text style={styles.dateSelectedText}>
                {t('reserve.date_selected')}:{' '}
                <Text style={{ fontWeight: '600', color: COLOURS.GREEN }}>
                  {date.toDateString()}
                </Text>
              </Text>
            </View>
          </View>
          {/* How many people */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>
              {t('reserve.how_many_people')}
            </Text>
            <NumberModifier onPress={(num) => setNumPeople(num)} />
          </View>
          {/* Which service */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>
              {t('reserve.which_service')}
            </Text>
            <RadioButtonGroup
              containerStyle={{
                flexDirection: 'row',
                marginVertical: VALUES.SPACING.SMALL,
              }}
              selected={serviceType}
              onSelected={(value: string) => setServiceType(value)}
              radioBackground={COLOURS.RED}
            >
              <RadioButtonItem
                style={{ marginRight: VALUES.SPACING.XSMALL }}
                value={SERVICE_TYPE.LUNCH}
                label={t('reserve.lunch')}
              />
              <RadioButtonItem
                style={{
                  marginLeft: VALUES.SPACING.XLARGE,
                  marginRight: VALUES.SPACING.XSMALL,
                }}
                value={SERVICE_TYPE.DINNER}
                label={t('reserve.dinner')}
              />
            </RadioButtonGroup>
          </View>
          {/* Select time */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>{t('reserve.select_time')}</Text>
            <View style={styles.timeSelectionContainer}>
              {/* TODO: only show times more than 5 hours ahead of current time */}
              {serviceType ? (
                timeSelections?.map((item, index) => (
                  <TimeSelection
                    key={index}
                    time={item}
                    onPress={(time) => setTime(time)}
                    selected={time == item}
                  />
                ))
              ) : (
                <Text style={styles.timesPlaceholderText}>
                  {t('reserve.select_service_first')}
                </Text>
              )}
            </View>
          </View>
          {/* Notes */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>{t('reserve.notes')}</Text>
            <View style={styles.timeSelectionContainer}>
              <TextInput
                style={styles.notesTextInput}
                multiline
                onChangeText={(text) => setNotes(text)}
                value={notes}
                textAlignVertical="top"
              />
            </View>
          </View>
          {/* TODO: retain checkmarks when pressing "back" */}
          {/* Special requirements */}
          <View style={styles.sectionContainer}>
            <Text style={styles.questionText}>
              {t('reserve.special_requirements')}
            </Text>
            <SpecialRequirementsCheckboxes
              onToggle={(items) => setSpecialRequirements(items)}
            />
            <CustomButton
              style={styles.nextButton}
              onPress={onNextButtonPressed}
            >
              {t('buttons.next')}
            </CustomButton>
          </View>
        </>
      ) : (
        <View style={styles.sectionContainer}>
          <View style={styles.titleContainer}>
            <CircleText
              textStyle={{
                fontFamily: 'caveat-brush',
                fontSize: VALUES.FONT_SIZE['XLARGE'],
              }}
            >
              2
            </CircleText>
            <View style={{ marginLeft: VALUES.SPACING.SMALL }}>
              <HeaderTitle colour={COLOURS.RED}>
                {t('reserve.your_details')}
              </HeaderTitle>
            </View>
          </View>
          <ReserveUserDetails
            onSignInPress={() =>
              // TODO: login logic
              //navigation.navigate('ProfileLoginModal')
              console.log('Sign in pressed')
            }
            onBackPress={() => setNextButtonPressed(false)}
            onConfirmPress={() => console.log('confim press')}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: VALUES.SPACING.LARGE,
    paddingHorizontal: VALUES.SPACING.MEDIUM,
  },
  bottomBorder: {
    borderBottomWidth: 10,
    borderColor: COLOURS.BEIGE,
  },
  questionText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    fontWeight: '500',
    marginBottom: VALUES.SPACING.MEDIUM,
  },

  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: VALUES.SPACING.MEDIUM,
  },

  datePickerContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  dateSelectedText: {
    textAlign: 'center',
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingTop: VALUES.SPACING.LARGE,
  },

  timeSelectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timesPlaceholderText: {
    fontStyle: 'italic',
    color: COLOURS.GREY,
    marginVertical: VALUES.SPACING.SMALL,
  },

  notesTextInput: {
    borderWidth: 0.5,
    padding: VALUES.SPACING.MEDIUM,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    width: '100%',
    height: VALUES.SIZE['5XLARGE'],
    backgroundColor: COLOURS.BEIGE,
  },
  nextButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: VALUES.SPACING.LARGE,
  },
});
