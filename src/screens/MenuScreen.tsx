import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { RootTabScreenProps } from '../typings/navigationTypes';
import { MenuItemType, MenuType, OrderType } from '../typings/menuTypes';
import { MENU_MODE } from '../constants/AppConstants';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import MenuList from '../components/menu/MenuList';

import { MENU } from '../DummyData';

export default function MenuScreen({
  navigation,
  route,
}: RootTabScreenProps<'MenuScreen'>) {
  const { mode } = route.params;
  const { t } = useTranslation();
  const flatListRef = useRef<any | undefined>();
  const [displayedMenu, setDisplayedMenu] = useState<MenuType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    { category: string; index: number } | undefined
  >();

  const [currentOrder, setCurrentOrder] = useState<OrderType | undefined>();

  useEffect(() => {
    // Get menu and set initial category select
    getMenu(mode);
    setSelectedCategory({ category: 'All', index: 0 });

    if (mode != MENU_MODE.BROWSE) {
      let startOrder: OrderType;
      startOrder = {
        mode: mode as 1 | 2,
        table: mode == MENU_MODE.DINEIN ? 1 : undefined,
        pickup: mode == MENU_MODE.TAKEAWAY ? 'Today' : undefined,
        items: [],
      };
      setCurrentOrder(startOrder);
    }
  }, []);

  useEffect(() => {
    // Update menu shown everytime browse mode changes
    getMenu(mode);
  }, [mode]);

  // Handle Add To Order
  const onAddToOrderPress = (num: number, item: MenuItemType) => {
    if (currentOrder?.items) {
      let newItems = currentOrder?.items;
      newItems?.push({ num: num, item: item });
      setCurrentOrder({ ...currentOrder, items: newItems });
    }
  };

  // Get menu items based on mode (browse/dine-in/takeaway)
  const getMenu = (mode: number) => {
    // If in takeaway mode, only show items that can be takeaway
    if (mode == MENU_MODE.TAKEAWAY) {
      let newMenu: MenuType[] = [];
      MENU.forEach((category) => {
        let newItems = category.items.filter(
          (item) => item.nutriInfo?.takeaway == 'y'
        );
        let newCategory = { ...category, items: newItems } as MenuType;
        newMenu?.push(newCategory);
      });
      setDisplayedMenu(newMenu as MenuType[]);
    } else {
      setDisplayedMenu(MENU as MenuType[]);
    }
  };

  const handleCategorySelect = (category: string, index: number) => {
    // Set category selection and scroll down to selected category
    setSelectedCategory({ category, index });
    flatListRef.current.scrollToIndex({ animated: true, index });
  };

  // TODO
  const handleSearchPress = () => {};

  return (
    <View style={styles.container}>
      {/* Category sorter */}
      <View style={styles.sorterContainer}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={VALUES.FONT_SIZE.LARGE}
          color={COLOURS.BLACK}
          onPress={handleSearchPress}
        />
        <FlatList
          data={displayedMenu}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.category}
          ListHeaderComponent={
            <Pressable
              onPress={() => {
                handleCategorySelect('All', 0);
              }}
            >
              <View
                style={
                  selectedCategory?.category == 'All' &&
                  styles.categoryUnderline
                }
              >
                <Text
                  style={[
                    styles.category,
                    selectedCategory?.category == 'All' &&
                      styles.categorySelected,
                  ]}
                >
                  {t('menu.all')}
                </Text>
              </View>
            </Pressable>
          }
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                handleCategorySelect(item.category, index);
              }}
            >
              <View
                style={
                  selectedCategory?.category == item.category &&
                  styles.categoryUnderline
                }
              >
                <Text
                  style={[
                    styles.category,
                    selectedCategory?.category == item.category &&
                      styles.categorySelected,
                  ]}
                >
                  {item.category}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {/* Menu items */}
      <FlatList
        ref={flatListRef}
        data={displayedMenu}
        ListFooterComponent={
          // Add padding at bottom of items for cart button
          <View
            style={
              mode !== MENU_MODE.BROWSE && {
                paddingBottom: 2 * VALUES.SPACING.XLARGE,
              }
            }
          />
        }
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <>
            <HeaderTitle colour={COLOURS.RED}>{item.category}</HeaderTitle>
            <MenuList
              itemList={item.items}
              onPress={(item) =>
                navigation.navigate('MenuItemModal', {
                  title: item.name,
                  item: item,
                  mode: mode,
                  onAddToOrderPress: onAddToOrderPress,
                })
              }
            />
          </>
        )}
      />
      {/* Show cart button if ordering dine-in / takeaway */}
      {mode !== MENU_MODE.BROWSE && (
        <Pressable
          style={styles.cartButton}
          onPress={() =>
            navigation.navigate('OrderCartModal', {
              order: currentOrder as OrderType,
            })
          }
        >
          <View style={[styles.flexRowCenter, { flex: 1 }]}>
            <Text style={[styles.yourOrderText, styles.whiteText]}>
              {t('buttons.your_order')}
            </Text>
            <Text style={styles.whiteText}>
              {currentOrder?.items.length} item(s)
            </Text>
          </View>
          <View style={styles.flexRowCenter}>
            <Text style={styles.whiteText}>{t('buttons.view_cart')}</Text>
            <Feather
              name="chevron-right"
              size={VALUES.SPACING.LARGE}
              color={COLOURS.WHITE}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  sorterContainer: {
    paddingHorizontal: VALUES.SPACING.SMALL,
    paddingVertical: VALUES.SPACING.SMALL,
    flexDirection: 'row',
  },
  searchIcon: {
    marginRight: VALUES.SPACING.SMALL,
    paddingVertical: VALUES.SPACING.SMALL,
  },
  category: {
    paddingHorizontal: VALUES.SPACING.SMALL,
    paddingVertical: VALUES.SPACING.SMALL,
    color: COLOURS.TEXT_PLACEHOLDER,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    textTransform: 'uppercase',
  },
  categorySelected: {
    color: COLOURS.RED,
  },
  categoryUnderline: {
    borderBottomWidth: 2,
    borderBottomColor: COLOURS.RED,
  },

  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLOURS.GREEN,
    padding: VALUES.SPACING.MEDIUM,
    bottom: VALUES.SPACING.SMALL,
    right: VALUES.SPACING.SMALL,
    left: VALUES.SPACING.SMALL,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteText: {
    color: COLOURS.WHITE,
  },
  yourOrderText: {
    textTransform: 'uppercase',
    marginRight: VALUES.SPACING.MEDIUM,
    fontWeight: '600',
  },
});
