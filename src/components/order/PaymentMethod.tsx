import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { FontAwesome5 } from '@expo/vector-icons';

import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../common/CustomButton';
import { PAYMENT_METHOD } from '../../constants/AppConstants';

interface PaymentMethodProps {
  backPressed: () => void;
  confirmPressed: () => void;
}

const PaymentMethod = (props: PaymentMethodProps) => {
  const { backPressed, confirmPressed } = props;
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>();

  const handleConfirmPayment = () => {
    if (paymentMethod) {
      confirmPressed();
    } else {
      Alert.alert(t('error_alerts.error'), t('error_alerts.select_payment'), [
        { text: t('buttons.okay') },
      ]);
    }
  };

  const renderPaymentMethodLabel = (method: string) => {
    switch (method) {
      case PAYMENT_METHOD.CREDIT_DEBIT:
        return (
          <View style={styles.paymentOptionContainer}>
            <FontAwesome5
              name="credit-card"
              size={VALUES.FONT_SIZE.MEDIUM}
              style={{ paddingHorizontal: VALUES.SPACING.SMALL }}
            />
            <Text style={styles.paymentOptionText}>Credit / Debit</Text>
          </View>
        );
        break;
      case PAYMENT_METHOD.APPLE_PAY:
        return (
          <View style={styles.paymentOptionContainer}>
            <FontAwesome5
              name="apple-pay"
              size={VALUES.FONT_SIZE['2XLARGE']}
              style={{ paddingHorizontal: VALUES.SPACING.SMALL }}
            />
            <Text style={styles.paymentOptionText}>Apple Pay</Text>
          </View>
        );
        break;
      case PAYMENT_METHOD.GOOGLE_PAY:
        return (
          <View style={styles.paymentOptionContainer}>
            <FontAwesome5
              name="google-pay"
              size={VALUES.FONT_SIZE['2XLARGE']}
              style={{ paddingHorizontal: VALUES.SPACING.SMALL }}
            />
            <Text style={styles.paymentOptionText}>Google Pay</Text>
          </View>
        );
        break;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="credit-card" size={VALUES.FONT_SIZE['2XLARGE']} />
        <Text style={styles.titleText}>Select payment method</Text>
      </View>
      {Platform.OS === 'ios' && (
        <RadioButtonGroup
          containerStyle={styles.paymentSelectionContainer}
          radioStyle={styles.paymentOptionContainer}
          selected={paymentMethod}
          onSelected={(value: string) => setPaymentMethod(value)}
          radioBackground={COLOURS.RED}
        >
          <RadioButtonItem
            value={PAYMENT_METHOD.CREDIT_DEBIT}
            label={renderPaymentMethodLabel(PAYMENT_METHOD.CREDIT_DEBIT)}
          />
          <RadioButtonItem
            value={PAYMENT_METHOD.APPLE_PAY}
            label={renderPaymentMethodLabel(PAYMENT_METHOD.APPLE_PAY)}
          />
        </RadioButtonGroup>
      )}
      {Platform.OS === 'android' && (
        <RadioButtonGroup
          containerStyle={styles.paymentSelectionContainer}
          radioStyle={styles.paymentOptionContainer}
          selected={paymentMethod}
          onSelected={(value: string) => setPaymentMethod(value)}
          radioBackground={COLOURS.RED}
        >
          <RadioButtonItem
            value={PAYMENT_METHOD.CREDIT_DEBIT}
            label={renderPaymentMethodLabel(PAYMENT_METHOD.CREDIT_DEBIT)}
          />
          <RadioButtonItem
            value={PAYMENT_METHOD.GOOGLE_PAY}
            label={renderPaymentMethodLabel(PAYMENT_METHOD.GOOGLE_PAY)}
          />
        </RadioButtonGroup>
      )}
      <View style={styles.buttonsContainer}>
        <Pressable onPress={backPressed}>
          <Text style={styles.cancelOrder}>{t('buttons.back')}</Text>
        </Pressable>
        <View>
          <CustomButton
            onPress={handleConfirmPayment}
            style={{
              paddingHorizontal: VALUES.SPACING.MEDIUM,
              marginTop: VALUES.SPACING.SMALL,
            }}
            textStyle={{ textTransform: 'none', fontWeight: '500' }}
          >
            {t('buttons.confirm_payment')}
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: VALUES.SPACING.MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: VALUES.SPACING.MEDIUM,
    fontSize: VALUES.FONT_SIZE.LARGE,
    fontWeight: '500',
  },

  paymentSelectionContainer: {
    flex: 1,
    padding: VALUES.SPACING.LARGE,
  },
  paymentOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: VALUES.SPACING.MEDIUM,
  },
  paymentOptionText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: VALUES.SPACING.MEDIUM,
    padding: VALUES.SPACING.MEDIUM,
  },
  cancelOrder: {
    color: COLOURS.RED,
    fontWeight: '600',
    fontSize: VALUES.FONT_SIZE.MEDIUM,
  },
});
