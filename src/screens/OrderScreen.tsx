import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { RootStackScreenProps } from '../typings/navigationTypes';
import { BrowseType, OrderType } from '../typings/menuTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import { MENU_MODE } from '../constants/AppConstants';
import HeaderTitle from '../components/common/HeaderTitle';
import OrderButtons from '../components/order/OrderButtons';
import ActiveOrderCard from '../components/order/ActiveOrderCard';

import { ORDERS } from '../DummyData';

export default function OrderScreen({ navigation }: RootStackScreenProps<any>) {
  const { t } = useTranslation();
  const [activeOrders, setActiveOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    // Get active orders
    let orders = ORDERS.filter((order) => order.statusActive == true);
    setActiveOrders(orders as OrderType[]);
    //console.log('activeOrders: ' + JSON.stringify(activeOrders));
  }, []);

  return (
    <View style={styles.container}>
      {/* Start ordering */}
      <ImageBackground
        style={styles.upperContainer}
        source={require('../../assets/images//ui-images/menu-1.png')}
        imageStyle={{ opacity: 0.5, marginVertical: VALUES.SPACING.LARGE }}
        resizeMode="cover"
      >
        <Text style={styles.startOrderingText}>
          {t('order.start_ordering')}
        </Text>
        <OrderButtons
          onPressDineIn={() =>
            navigation.navigate('Root', {
              screen: 'MenuScreen',
              params: { mode: MENU_MODE.DINEIN as BrowseType },
            })
          }
          onPressTakeAway={() =>
            navigation.navigate('Root', {
              screen: 'MenuScreen',
              params: { mode: MENU_MODE.TAKEAWAY as BrowseType },
            })
          }
        />
      </ImageBackground>

      {/* Active orders */}
      <View style={styles.lowerContainer}>
        <HeaderTitle colour={COLOURS.WHITE}>
          {t('order.your_active_orders')}
        </HeaderTitle>
        {activeOrders.length > 0 ? (
          <ScrollView style={styles.activeOrderContainer}>
            {activeOrders.map((order, index) => (
              <View key={index} style={styles.activeOrderCardContainer}>
                <ActiveOrderCard
                  order={order}
                  onPress={() =>
                    navigation.navigate('ActiveOrderModal', { order: order })
                  }
                />
              </View>
            ))}
          </ScrollView>
        ) : (
          // No active orders
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
    flex: 2,
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
    paddingTop: VALUES.SPACING.MEDIUM,
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
