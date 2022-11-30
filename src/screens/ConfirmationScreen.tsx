import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import { NestedScreenProps } from '../typings/navigationTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import CustomButton from '../components/common/CustomButton';
import HeaderTitle from '../components/common/HeaderTitle';
import { CONFIRM_TYPE } from '../constants/AppConstants';

const ConfirmationScreen = ({
  navigation,
  route,
}: NestedScreenProps<'ConfirmationScreen'>) => {
  const { t } = useTranslation();
  const type = route.params.type;
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    switch (type) {
      case CONFIRM_TYPE.ORDER:
        setTitle(t('cart.order_confirmed'));
        setDesc(t('cart.order_progress_or_change'));
        break;
      case CONFIRM_TYPE.RESERVE:
        setTitle(t('reserve.reservation_complete'));
        setDesc(t('reserve.reservation_change') + ' 0000 000 000');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <HeaderTitle colour={COLOURS.RED} style={styles.confirmText}>
          {title}
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
      <Text style={styles.orderText}>{desc}</Text>
      <CustomButton
        style={{ width: '100%', maxWidth: 200 }}
        textStyle={{ fontWeight: '600' }}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        {t('buttons.okay')}
      </CustomButton>
      {type === 'order' && (
        <Pressable
          style={styles.orderAgain}
          onPress={() =>
            navigation.navigate('Order', { screen: 'OrderScreen' })
          }
        >
          <Text style={styles.orderAgainText}>{t('buttons.order_again')}</Text>
          <Feather name="chevron-right" size={24} color={COLOURS.GREEN} />
        </Pressable>
      )}
    </View>
  );
};

export default ConfirmationScreen;

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
  orderAgain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderAgainText: {
    color: COLOURS.GREEN,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    fontWeight: '600',
  },
});
