import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { VALUES } from '../../constants/Styling';
import ButtonWithIcon from '../common/ButtonWithIcon';

interface OrderButtonsProps {
  onPressDineIn: () => void;
  onPressTakeAway: () => void;
}

const OrderButtons = (props: OrderButtonsProps) => {
  const { onPressDineIn, onPressTakeAway } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <ButtonWithIcon
          onPress={onPressDineIn}
          text={t('buttons.order_at_table')}
          icon={<Ionicons name="restaurant-outline" />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithIcon
          onPress={onPressTakeAway}
          text={t('buttons.order_pickup')}
          icon={<SimpleLineIcons name="bag" />}
        />
      </View>
    </View>
  );
};

export default OrderButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: VALUES.SPACING.XLARGE,
    paddingBottom: VALUES.SPACING.XLARGE,
  },
  buttonContainer: {
    width: '47%',
    height: 1.4 * VALUES.SIZE['3XLARGE'],
  },
});
