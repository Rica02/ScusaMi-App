import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../../typings/navigationTypes';
import { BrowseType } from '../../typings/menuTypes';
import { MENU_MODE } from '../../constants/AppConstants';
import { VALUES } from '../../constants/Styling';
import { COLOURS } from '../../constants/Colours';
import CartItem from '../../components/order/CartItem';
import CustomButton from '../../components/common/CustomButton';
import PaymentMethod from '../../components/order/PaymentMethod';

const OrderCartModal = ({
  navigation,
  route,
}: RootStackScreenProps<'OrderCartModal'>) => {
  const order = route.params.order;
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState<number | undefined>();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    order.items.forEach((item) => {
      price = price + item.num * item.item.totalPrice;
    });
    setTotalPrice(price);
  }, []);

  return (
    <View style={styles.container}>
      {!payNow ? (
        <>
          <View style={styles.upperContainer}>
            {order.mode == MENU_MODE.DINEIN && (
              <View style={styles.title}>
                <Ionicons
                  name="restaurant-outline"
                  size={VALUES.FONT_SIZE['2XLARGE']}
                />
                <Text style={styles.titleText}>
                  {t('cart.dine_in')}
                  {order.table}
                </Text>
              </View>
            )}
            {order.mode == MENU_MODE.TAKEAWAY && (
              <View style={styles.title}>
                <SimpleLineIcons
                  name="bag"
                  size={VALUES.FONT_SIZE['2XLARGE']}
                />
                <Text style={styles.titleText}>
                  {t('cart.pickup')}
                  {order.pickup}
                </Text>
              </View>
            )}
            {order.items.length > 0 ? (
              <FlatList
                data={order.items}
                style={{ padding: VALUES.SPACING.SMALL }}
                ListFooterComponent={
                  <View style={styles.total}>
                    <Text style={styles.totalText}>{t('cart.total')}</Text>
                    <Text style={styles.totalText}>
                      ${Number(totalPrice).toFixed(2)}
                    </Text>
                  </View>
                }
                renderItem={({ item }) => <CartItem itemList={item} />}
              />
            ) : (
              <Text style={styles.noItemsText}>{t('order.no_items')}</Text>
            )}
          </View>
          {order.items.length > 0 && (
            <View style={styles.buttonsContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate('Root', {
                    screen: 'MenuScreen',
                    params: { mode: MENU_MODE.BROWSE as BrowseType },
                  })
                }
              >
                <Text style={styles.cancelOrder}>
                  {t('buttons.cancel_order')}
                </Text>
              </Pressable>
              <View>
                <CustomButton
                  onPress={() => setPayNow(true)}
                  textStyle={{ textTransform: 'none', fontWeight: '500' }}
                >
                  {t('buttons.pay_now')}
                </CustomButton>
                <CustomButton
                  onPress={() =>
                    navigation.navigate('Root', {
                      screen: 'Order',
                      params: {
                        screen: 'OrderConfirmationScreen',
                        initial: false,
                      },
                    })
                  }
                  style={{
                    paddingHorizontal: VALUES.SPACING.MEDIUM,
                    marginTop: VALUES.SPACING.SMALL,
                  }}
                  textStyle={{ textTransform: 'none', fontWeight: '500' }}
                >
                  {t('buttons.pay_later')}
                </CustomButton>
              </View>
            </View>
          )}
        </>
      ) : (
        <PaymentMethod
          backPressed={() => setPayNow(false)}
          confirmPressed={() => {
            navigation.navigate('Root', {
              screen: 'Order',
              params: {
                screen: 'OrderConfirmationScreen',
                initial: false,
              },
            });
          }}
        />
      )}
    </View>
  );
};

export default OrderCartModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  upperContainer: {
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
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: VALUES.FONT_SIZE.LARGE,
  },
  noItemsText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    color: COLOURS.GREY,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: VALUES.SPACING.LARGE,
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
