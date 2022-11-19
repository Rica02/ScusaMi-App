import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { MenuItemType } from '../../typings/menuTypes';
import CustomButton from '../common/CustomButton';

interface CartItemProps {
  itemList: { num: number; item: MenuItemType };
}

const CartItem = (props: CartItemProps) => {
  const { t } = useTranslation();
  const { itemList } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemName}>
          {itemList.num}x {itemList.item.name}
        </Text>
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
      <Text>$15</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //borderWidth: 0.2,
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
    paddingBottom: VALUES.SPACING.MEDIUM,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonTextStyle: {
    textTransform: 'capitalize',
  },
});
