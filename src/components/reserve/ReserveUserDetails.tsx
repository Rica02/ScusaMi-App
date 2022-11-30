import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { t } from 'i18next';

import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../common/CustomButton';
import { UserType } from '../../typings/userTypes';

interface ReserveUserDetailsProps {
  onSignInPress: () => void;
  onBackPress: () => void;
  onConfirmPress: (user: UserType) => void;
}

const ReserveUserDetails = (props: ReserveUserDetailsProps) => {
  const { onSignInPress, onBackPress, onConfirmPress } = props;

  const [user, setUser] = useState<UserType | undefined>();
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [mobile, setMobile] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [company, setCompany] = useState<string | undefined>();
  const [isTocChecked, setIsTocChecked] = useState(false);

  const onConfirmButtonPress = () => {
    // Check if all compulsory fields are filled in
    if (firstName && lastName && mobile && email) {
      if (isTocChecked) {
        setUser({
          firstName: firstName,
          lastName: lastName,
          mobile: +mobile,
          email: email,
          company: company ? company : undefined,
        });
        if (user) {
          onConfirmPress(user);
        }
      } else {
        Alert.alert(t('error_alerts.error'), t('error_alerts.accept_toc'), [
          { text: t('buttons.okay') },
        ]);
      }
    } else {
      // If not, alert user
      Alert.alert(t('error_alerts.error'), t('error_alerts.complete_fields'), [
        { text: t('buttons.okay') },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sign in */}
      <View style={styles.signInContainer}>
        <CustomButton onPress={onSignInPress}>
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
          placeholder={t('user_details.first_name') + '*'}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('user_details.last_name') + '*'}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('user_details.mobile') + '*'}
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('user_details.email') + '*'}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('user_details.company_name')}
          value={company}
          onChangeText={(text) => setCompany(text)}
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
        <CustomButton style={styles.nextButton} onPress={onBackPress}>
          {t('buttons.back')}
        </CustomButton>
        <CustomButton
          style={styles.nextButton}
          onPress={() => onConfirmButtonPress()}
        >
          {t('buttons.confirm')}
        </CustomButton>
      </View>
    </View>
  );
};

export default ReserveUserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
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
