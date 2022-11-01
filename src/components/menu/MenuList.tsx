import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VALUES } from '../../constants/Styling';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../typings/menuTypes';

interface MenuListProps {
  itemList: MenuItemType[];
}

const MenuList = (props: MenuListProps) => {
  const { itemList } = props;

  const Items = () => {
    return (
      <>
        {itemList.map((item, index) => (
          <View style={styles.menuItemContainer}>
            <MenuItem
              key={index}
              primaryIndex={index % 2 ? false : true}
              item={item}
            />
          </View>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Items />
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
