import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import HeaderTitle from '../components/common/HeaderTitle';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';

interface ContactUsModalProps {
  navigation: any;
}

const ContactUsModal = (props: ContactUsModalProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);

  return (
    <View style={styles.container}>
      {!messageSent ? (
        <>
          <TextInput
            style={styles.textInput}
            placeholder={t('user_details.name') + '*'}
          />
          <TextInput
            style={styles.textInput}
            placeholder={t('user_details.mobile') + '*'}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.textInput}
            placeholder={t('user_details.email') + '*'}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textArea}
            multiline
            textAlignVertical="top"
            placeholder={t('contact_us.tell_us_everything')}
          />
          <CustomButton
            onPress={() => setMessageSent(true)}
            style={{ marginBottom: VALUES.SPACING.LARGE }}
          >
            {t('buttons.send')}
          </CustomButton>
        </>
      ) : (
        <View style={styles.confirmationContainer}>
          <HeaderTitle
            colour={COLOURS.RED}
            style={{ fontSize: VALUES.FONT_SIZE['2XLARGE'] }}
          >
            {t('contact_us.grazie')}
          </HeaderTitle>
          <Text style={styles.messageSentText}>
            {t('contact_us.message_sent')}
          </Text>
          <CustomButton
            onPress={() =>
              navigation.navigate('Root', { screen: 'HomeScreen' })
            }
            style={styles.homeButton}
          >
            {t('buttons.return_to_home')}
          </CustomButton>
        </View>
      )}
    </View>
  );
};

export default ContactUsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
    padding: VALUES.SPACING.MEDIUM,
  },
  textInput: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    padding: VALUES.SPACING.SMALL,
    marginVertical: VALUES.SPACING.SMALL,
    borderBottomWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  textArea: {
    flex: 1,
    borderWidth: 0.5,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    padding: VALUES.SPACING.MEDIUM,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    backgroundColor: COLOURS.BEIGE,
    marginVertical: VALUES.SPACING.MEDIUM,
  },
  confirmationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageSentText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  homeButton: {
    paddingHorizontal: VALUES.SPACING['3XLARGE'],
    marginVertical: VALUES.SPACING.LARGE,
  },
});
