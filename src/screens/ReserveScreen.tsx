import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import Checkbox from 'expo-checkbox';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';

import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import CircleText from '../components/common/CircleText';
import CustomButton from '../components/common/CustomButton';

export default function ReserveScreen() {
  const { t } = useTranslation();
  const [nextButtonPressed, setNextButtonPressed] = useState(false);
  const [isTocChecked, setIsTocChecked] = useState(false);
  const [serviceSelection, setServiceSelection] = useState<
    string | undefined
  >();

  return (
    <ScrollView style={styles.container}>
      {!nextButtonPressed ? (
        <>
          {/* Booking calendar */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <View style={styles.titleContainer}>
              <CircleText>1</CircleText>
              <View style={{ marginLeft: VALUES.SPACING.SMALL }}>
                <HeaderTitle colour={COLOURS.RED}>
                  {t('reserve.booking')}
                </HeaderTitle>
              </View>
            </View>
            <View style={styles.calendarContainer}>
              <Text>[calendar here]</Text>
            </View>
          </View>
          {/* How many people */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>
              {t('reserve.how_many_people')}
            </Text>
            <View style={styles.selectNumPeopleContainer}>
              <CircleText disabled={true}>-</CircleText>
              <Text style={styles.numPeopleText}>1</Text>
              <CircleText disabled={false}>+</CircleText>
            </View>
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
              selected={serviceSelection}
              onSelected={(value: string) => setServiceSelection(value)}
              radioBackground={COLOURS.RED}
            >
              <RadioButtonItem
                style={{ marginRight: VALUES.SPACING.XSMALL }}
                value="lunch"
                label={t('reserve.lunch')}
              />
              <RadioButtonItem
                style={{
                  marginLeft: VALUES.SPACING.XLARGE,
                  marginRight: VALUES.SPACING.XSMALL,
                }}
                value="dinner"
                label={t('reserve.dinner')}
              />
            </RadioButtonGroup>
          </View>
          {/* Select time */}
          <View style={[styles.sectionContainer, styles.bottomBorder]}>
            <Text style={styles.questionText}>{t('reserve.select_time')}</Text>
            <View>
              <Text>[times gere]</Text>
            </View>
          </View>
          {/* Special requirements */}
          <View style={styles.sectionContainer}>
            <Text style={styles.questionText}>
              {t('reserve.special_requirements')}
            </Text>
            <View>
              <Text>[options gere]</Text>
            </View>
            <CustomButton
              style={styles.nextButton}
              onPress={() => setNextButtonPressed(true)}
            >
              {t('buttons.next')}
            </CustomButton>
          </View>
        </>
      ) : (
        <>
          {/* Your details */}
          <View style={styles.sectionContainer}>
            <View style={styles.titleContainer}>
              <CircleText>2</CircleText>
              <View style={{ marginLeft: VALUES.SPACING.SMALL }}>
                <HeaderTitle colour={COLOURS.RED}>
                  {t('reserve.your_details')}
                </HeaderTitle>
              </View>
            </View>
            {/* Sign in */}
            <View style={styles.signInContainer}>
              <CustomButton onPress={() => console.log('sign in pressed')}>
                {t('buttons.sign_in')}
              </CustomButton>
              <Text style={styles.saveDetailsText}>
                {t('reserve.to_save_details')}
              </Text>
            </View>
            {/* Guest details */}
            <View style={styles.guestDetailsContainer}>
              <Text style={{ fontSize: VALUES.SPACING.MEDIUM }}>
                {t('reserve.continue_as_guest')}
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder={t('reserve.first_name') + '*'}
              />
              <TextInput
                style={styles.textInput}
                placeholder={t('reserve.last_name') + '*'}
              />
              <TextInput
                style={styles.textInput}
                placeholder={t('reserve.mobile') + '*'}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.textInput}
                placeholder={t('reserve.email') + '*'}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textInput}
                placeholder={t('reserve.company_name')}
              />
              <View style={styles.tocContainer}>
                <Checkbox
                  value={isTocChecked}
                  onValueChange={setIsTocChecked}
                  color={isTocChecked ? COLOURS.RED : undefined}
                />
                <Text style={styles.tocText}>
                  {t('reserve.i_agree')}{' '}
                  <Text style={styles.tocHyperlink}>
                    {t('reserve.terms_and_conditions')}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton
                style={styles.nextButton}
                onPress={() => setNextButtonPressed(false)}
              >
                {t('buttons.back')}
              </CustomButton>
              <CustomButton
                style={styles.nextButton}
                onPress={() => console.log('confirm pressed')}
              >
                {t('buttons.confirm')}
              </CustomButton>
            </View>
          </View>
        </>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: VALUES.SPACING.MEDIUM,
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
  calendarContainer: {
    borderWidth: 0.5,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectNumPeopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: VALUES.SPACING.SMALL,
  },
  numPeopleText: {
    fontSize: VALUES.FONT_SIZE.LARGE,
    marginHorizontal: VALUES.SPACING.MEDIUM,
  },

  signInContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: VALUES.SPACING['2XLARGE'],
    marginBottom: VALUES.SPACING.MEDIUM,
  },
  saveDetailsText: {
    paddingVertical: VALUES.SPACING.SMALL,
  },

  guestDetailsContainer: {
    width: '100%',
  },
  textInput: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    padding: VALUES.SPACING.SMALL,
    marginVertical: VALUES.SPACING.SMALL,
    borderBottomWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  tocContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: VALUES.SPACING.LARGE,
  },
  tocText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    marginLeft: VALUES.SPACING.SMALL,
  },
  tocHyperlink: {
    color: COLOURS.HYPERLINK,
    textDecorationLine: 'underline',
  },

  nextButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: VALUES.SPACING.LARGE,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
