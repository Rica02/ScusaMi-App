import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VALUES } from '../../constants/Styling';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../typings/menuTypes';

interface MenuListProps {
  itemList?: MenuItemType[];
}

const MenuList = (props: MenuListProps) => {
  const { itemList } = props;

  return (
    <View style={styles.container}>
      {itemList?.map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <MenuItem primaryIndex={index % 2 ? false : true} item={item} />
        </View>
      ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: VALUES.SPACING.SMALL,
  },
  menuItemContainer: {
    paddingHorizontal: VALUES.SPACING.SMALL,
    paddingVertical: 1.5 * VALUES.SPACING.XSMALL,
  },
});
