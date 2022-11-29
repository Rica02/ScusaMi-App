import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { OrderType } from '../../typings/menuTypes';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { MENU_MODE } from '../../constants/AppConstants';
import { useTranslation } from 'react-i18next';

interface ActiveOrderCardProps {
  order: OrderType;
  onPress: () => void;
}

const ActiveOrderCard = (props: ActiveOrderCardProps) => {
  const { order, onPress } = props;
  const { t } = useTranslation();

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Text>{t('order.order_placed')} 10 minutes ago</Text>
        <Text>{order.dateTime}</Text>
        {order.mode == MENU_MODE.DINEIN && (
          <Text>
            {t('order.dine_in_table')} {order.table}
          </Text>
        )}
        {order.mode == MENU_MODE.TAKEAWAY && (
          <Text>
            {t('order.pickup')} {order.pickup}
          </Text>
        )}
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.numItemsText}>
          {order.items.length} {t('order.num_items')}
        </Text>
        <View style={styles.viewProgressContainer}>
          <Text style={styles.viewProgressText}>
            {t('order.view_progress')}
          </Text>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </Pressable>
  );
};

export default ActiveOrderCard;

const styles = StyleSheet.create({
  container: {
    padding: VALUES.SPACING.MEDIUM,
    backgroundColor: COLOURS.WHITE,
  },

  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: VALUES.SPACING.SMALL,
  },
  numItemsText: {
    color: COLOURS.GREY,
  },
  viewProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProgressText: {
    fontWeight: '600',
  },
});
