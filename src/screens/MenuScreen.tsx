import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { RootTabScreenProps } from '../typings/navigationTypes';
import { MenuType } from '../typings/menuTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import MenuList from '../components/menu/MenuList';

import { MENU } from '../DummyData';

export default function MenuScreen({
  navigation,
}: RootTabScreenProps<'MenuScreen'>) {
  const { t } = useTranslation();
  const flatListRef = useRef<any | undefined>();
  const [displayedMenu, setDisplayedMenu] = useState<MenuType[] | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<
    { category: string; index: number } | undefined
  >();

  useEffect(() => {
    // Get menu and set initial category select
    setDisplayedMenu(MENU as MenuType[]);
    setSelectedCategory({ category: 'All', index: 0 });
  }, []);

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
          style={styles.categories}
          data={displayedMenu}
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
                })
              }
            />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  categories: {},
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
});
