import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

import { RootStackScreenProps } from '../../typings/navigationTypes';
import HeaderTitle from '../../components/common/HeaderTitle';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../../components/common/CustomButton';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileLoginModal({
  navigation,
}: RootStackScreenProps<'ProfileLoginModal'>) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <HeaderTitle colour={COLOURS.RED}>
        {t('profile.logged_as_guest')}
      </HeaderTitle>
      <View style={styles.loginInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={t('reserve.email') + '*'}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('profile.password') + '*'}
          secureTextEntry
        />
        <Pressable style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>
            {t('profile.forgot_password')}
          </Text>
        </Pressable>
        <CustomButton
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'Other',
              params: { screen: 'ProfileScreen', initial: false },
            })
          }
        >
          {t('buttons.sign_in')}
        </CustomButton>
      </View>
      <View style={styles.altSignInContainer}>
        <Pressable
          style={[styles.altSignInButton, { backgroundColor: '#3b5998' }]}
        >
          <FontAwesome
            name="facebook"
            size={VALUES.FONT_SIZE.LARGE}
            color={COLOURS.WHITE}
          />
          <Text style={styles.altSignInText}>
            {t('profile.sign_in_facebook')}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.altSignInButton, { backgroundColor: '#ea4335' }]}
        >
          <FontAwesome
            name="google"
            size={VALUES.FONT_SIZE.LARGE}
            color={COLOURS.WHITE}
          />
          <Text style={styles.altSignInText}>
            {t('profile.sign_in_google')}
          </Text>
        </Pressable>
      </View>
      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}>
          {t('profile.dont_have_account')}
          {'  '}
        </Text>
        <Pressable>
          <Text style={[styles.noAccountText, styles.signUp]}>
            {t('buttons.sign_up')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: VALUES.SPACING.MEDIUM,
  },

  loginInputContainer: {
    width: '100%',
    marginVertical: VALUES.SPACING.LARGE,
  },
  textInput: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    padding: VALUES.SPACING.SMALL,
    marginVertical: VALUES.SPACING.SMALL,
    borderBottomWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginVertical: VALUES.SPACING.MEDIUM,
  },
  forgotPasswordText: {
    fontWeight: '500',
    color: COLOURS.GREY,
    textDecorationLine: 'underline',
  },

  altSignInContainer: {
    width: '100%',
    marginVertical: VALUES.SPACING.LARGE,
  },
  altSignInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: VALUES.SPACING.SMALL,
    justifyContent: 'center',
    marginBottom: VALUES.SPACING.MEDIUM,
  },
  altSignInText: {
    color: COLOURS.WHITE,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    marginLeft: VALUES.SPACING.SMALL,
    fontWeight: '500',
  },

  noAccountContainer: {
    flexDirection: 'row',
    marginVertical: VALUES.SPACING.LARGE,
  },
  noAccountText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    justifyContent: 'center',
  },
  signUp: {
    color: COLOURS.RED,
    textDecorationLine: 'underline',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
