import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import { NestedScreenProps } from '../../typings/navigationTypes';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../../components/common/CustomButton';
import HeaderTitle from '../../components/common/HeaderTitle';

const OrderConfirmationScreen = ({
  navigation,
}: NestedScreenProps<'OrderConfirmationScreen'>) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <HeaderTitle colour={COLOURS.RED} style={styles.confirmText}>
          {t('cart.order_confirmed')}
        </HeaderTitle>
        <Feather
          style={{ paddingVertical: VALUES.SPACING.MEDIUM }}
          name="check-circle"
          size={150}
          color={COLOURS.GREEN}
        />
        <HeaderTitle colour={COLOURS.RED} style={styles.confirmText}>
          {t('cart.grazie_mille')}
        </HeaderTitle>
      </View>
      <Text style={styles.orderText}>{t('cart.order_progress_or_change')}</Text>
      <CustomButton
        style={{ width: '100%', maxWidth: 200 }}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        {t('buttons.okay')}
      </CustomButton>
    </View>
  );
};

export default OrderConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: VALUES.SPACING.MEDIUM,
  },
  upperContainer: {
    alignItems: 'center',
  },
  confirmText: {
    textTransform: 'none',
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
  },
  orderText: {
    textAlign: 'center',
    fontSize: VALUES.SPACING.MEDIUM,
    maxWidth: 250,
  },
});
