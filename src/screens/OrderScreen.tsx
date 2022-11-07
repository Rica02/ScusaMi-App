import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import OrderButtons from '../components/order/OrderButtons';
import ActiveOrderCard from '../components/order/ActiveOrderCard';

export default function OrderScreen() {
  const { t } = useTranslation();
  const [hasActiveOrders, setHasActiveOrders] = useState<boolean | undefined>();

  useEffect(() => {
    setHasActiveOrders(true);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.upperContainer}
        source={require('../../assets/images//ui-images/menu-1.png')}
        imageStyle={{ opacity: 0.5, marginVertical: VALUES.SPACING.LARGE }}
        resizeMode="cover"
      >
        <Text style={styles.startOrderingText}>
          {t('order.start_ordering')}
        </Text>
        <OrderButtons />
      </ImageBackground>
      <View style={styles.lowerContainer}>
        <HeaderTitle colour={COLOURS.WHITE}>
          {t('order.your_active_orders')}
        </HeaderTitle>
        {hasActiveOrders ? (
          <ScrollView style={styles.activeOrderContainer}>
            <View style={styles.activeOrderCardContainer}>
              <ActiveOrderCard />
            </View>
            <View style={styles.activeOrderCardContainer}>
              <ActiveOrderCard />
            </View>
          </ScrollView>
        ) : (
          <View style={styles.noActiveOrdersContainer}>
            <Text style={styles.noActiveOrdersText}>
              {t('order.no_active_orders')}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  upperContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  startOrderingText: {
    fontFamily: 'caveat-brush',
    textAlign: 'center',
    paddingBottom: VALUES.SPACING.XLARGE,
    color: COLOURS.RED,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
    textShadowColor: COLOURS.WHITE,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    textTransform: 'uppercase',
  },

  lowerContainer: {
    paddingVertical: VALUES.SPACING.MEDIUM,
    backgroundColor: COLOURS.RED,
    flex: 1,
  },
  noActiveOrdersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noActiveOrdersText: {
    color: COLOURS.BEIGE,
    fontStyle: 'italic',
  },
  activeOrderContainer: {
    paddingVertical: VALUES.SPACING.SMALL,
  },
  activeOrderCardContainer: {
    paddingHorizontal: VALUES.SPACING.SMALL,
    paddingVertical: 1.5 * VALUES.SPACING.XSMALL,
  },
});
