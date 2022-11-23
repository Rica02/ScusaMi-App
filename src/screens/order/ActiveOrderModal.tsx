import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import { RootStackScreenProps } from '../../typings/navigationTypes';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { MENU_MODE } from '../../constants/AppConstants';

export default function ActiveOrderModal({
  route,
}: RootStackScreenProps<'ActiveOrderModal'>) {
  const { order } = route.params;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <ScrollView style={styles.content}>
        {/* Title */}
        {order.mode == MENU_MODE.DINEIN && (
          <View style={styles.titleContainer}>
            <Ionicons
              name="restaurant-outline"
              size={VALUES.FONT_SIZE['2XLARGE']}
              color={COLOURS.BLACK}
            />
            <Text style={styles.titleText}>
              {t('order.dine_in_table')} {order.table}
            </Text>
          </View>
        )}
        {order.mode == MENU_MODE.TAKEAWAY && (
          <View style={styles.titleContainer}>
            <SimpleLineIcons
              name="bag"
              size={VALUES.FONT_SIZE['2XLARGE']}
              color={COLOURS.BLACK}
            />
            <Text style={styles.titleText}>
              {t('order.pickup')} {order.pickup}
            </Text>
          </View>
        )}

        {/* Order summary */}
        <View style={styles.yourOrderContainer}>
          <Text style={styles.yourOrderTitle}>{t('order.your_order')}</Text>
          <View style={styles.orderContainer}>
            {order.items.map((item, index) => (
              <Text key={index}>
                {item.num}x {item.item.name}
              </Text>
            ))}
          </View>
        </View>
        {/* Current progress */}
        <View style={styles.currentProgressContainer}>
          <Text style={styles.currentProgressText}>
            {t('order.current_progress')}
          </Text>
          <Text style={styles.statusText}>
            {t('order.status_estimate')}{' '}
            <Text style={{ fontWeight: '600' }}>10 minutes</Text>
          </Text>
          <View style={styles.iconsContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={50}
                color={COLOURS.TEXT_PLACEHOLDER}
              />
              <Text style={styles.progressText}>{t('order.in_queue')}</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="circle-slice-5"
                size={50}
                color={COLOURS.TEXT_PLACEHOLDER}
              />
              <Text style={styles.progressText}>{t('order.in_progress')}</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="checkbox-marked-circle"
                size={50}
                color={COLOURS.TEXT_PLACEHOLDER}
              />
              <Text style={styles.progressText}>{t('order.done')}</Text>
            </View>
          </View>
          <Text style={styles.needToChangeOrderText}>
            {t('order.need_to_change_order')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  content: {
    padding: VALUES.SPACING.MEDIUM,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: VALUES.SPACING.SMALL,
  },
  titleText: {
    fontSize: VALUES.FONT_SIZE.LARGE,
    fontWeight: '500',
    paddingLeft: VALUES.SPACING.MEDIUM,
  },

  yourOrderContainer: {
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  yourOrderTitle: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    fontWeight: '500',
  },
  orderContainer: {
    borderWidth: 1,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    backgroundColor: COLOURS.BEIGE,
    padding: VALUES.SPACING.SMALL,
    marginTop: VALUES.SPACING.MEDIUM,
  },

  currentProgressContainer: {
    alignItems: 'center',
    paddingVertical: VALUES.SPACING.MEDIUM,
    marginBottom: VALUES.SPACING.LARGE,
  },
  currentProgressText: {
    fontSize: VALUES.FONT_SIZE.LARGE,
    color: COLOURS.RED,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  statusText: {
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingVertical: VALUES.SPACING.MEDIUM,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 1.2 * VALUES.FONT_SIZE.XSMALL,
    color: COLOURS.GREY,
    textTransform: 'uppercase',
    marginTop: VALUES.SPACING.XSMALL,
  },
  needToChangeOrderText: {
    textAlign: 'center',
    maxWidth: 250,
    paddingVertical: VALUES.SPACING.SMALL,
  },
});
