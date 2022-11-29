import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { OrderMenuItemType } from '../../typings/menuTypes';
import CustomButton from '../common/CustomButton';

interface CartItemProps {
  itemList: { num: number; item: OrderMenuItemType };
}

const CartItem = (props: CartItemProps) => {
  const { t } = useTranslation();
  const { itemList } = props;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>
          {itemList.num}x {itemList.item.name}
        </Text>

        {/* Modifiers */}
        {itemList.item.modifiers && (
          <View style={styles.modifiersContainer}>
            {itemList.item.modifiers?.remove.length > 0 &&
              itemList.item.modifiers?.remove.map(
                (item, index) =>
                  item.isChecked && (
                    <Text key={index} style={styles.modifiersText}>
                      - {item.name}
                    </Text>
                  )
              )}
            {itemList.item.modifiers?.add.length > 0 &&
              itemList.item.modifiers?.add.map(
                (item, index) =>
                  item.isChecked && (
                    <Text key={index} style={styles.modifiersText}>
                      + {item.name}
                      <Text> ${item.price}</Text>
                    </Text>
                  )
              )}
            {/* Notes */}
            {itemList.item.notes && (
              <Text style={styles.modifiersText}>
                {t('order.notes')}: {itemList.item.notes}
              </Text>
            )}
          </View>
        )}

        {/* Edit & Remove buttons */}
        <View style={styles.buttonsContainer}>
          <CustomButton
            onPress={() => console.log()}
            style={{ paddingHorizontal: VALUES.SPACING.MEDIUM }}
            textStyle={styles.buttonTextStyle}
          >
            {t('buttons.edit')}
          </CustomButton>
          <CustomButton
            onPress={() => console.log()}
            style={{
              paddingHorizontal: VALUES.SPACING.MEDIUM,
              backgroundColor: COLOURS.RED,
              marginLeft: VALUES.SPACING.SMALL,
            }}
            textStyle={styles.buttonTextStyle}
          >
            {t('buttons.remove')}
          </CustomButton>
        </View>
      </View>
      <Text style={{ fontSize: VALUES.FONT_SIZE.MEDIUM }}>
        ${itemList.item.price}
      </Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    justifyContent: 'space-between',
    marginBottom: VALUES.SPACING.MEDIUM,
    padding: VALUES.SPACING.MEDIUM,
    backgroundColor: COLOURS.WHITE,
    shadowColor: COLOURS.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // TODO: check android
  },
  itemName: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    marginBottom: VALUES.SPACING.SMALL,
  },
  modifiersContainer: {
    marginLeft: VALUES.SPACING.MEDIUM,
  },
  modifiersText: {
    color: COLOURS.GREY,
    marginBottom: VALUES.SPACING.XSMALL,
  },
  buttonsContainer: {
    marginTop: VALUES.SPACING.SMALL,
    flexDirection: 'row',
  },
  buttonTextStyle: {
    textTransform: 'capitalize',
  },
});
