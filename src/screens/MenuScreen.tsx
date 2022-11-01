import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons';

import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import MenuList from '../components/menu/MenuList';

import { MENU } from '../DummyData';

export default function MenuScreen() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setSelectedCategory('All');
  }, []);

  useEffect(() => {
    console.log('Selected 2: ' + selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    console.log('Selected: ' + selectedCategory);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sorterContainer}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={VALUES.FONT_SIZE.MEDIUM}
          color={COLOURS.BLACK}
        />
        <ScrollView horizontal style={styles.categories}>
          <Pressable
            onPress={() => {
              handleCategorySelect('All');
            }}
          >
            <View style={selectedCategory == 'All' && styles.categoryUnderline}>
              <Text
                style={[
                  styles.category,
                  selectedCategory == 'All' && styles.categorySelected,
                ]}
              >
                {t('menu.all')}
              </Text>
            </View>
          </Pressable>
          {MENU.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                handleCategorySelect(item.category);
              }}
            >
              <View
                style={
                  selectedCategory == item.category && styles.categoryUnderline
                }
              >
                <Text
                  style={[
                    styles.category,
                    selectedCategory == item.category &&
                      styles.categorySelected,
                  ]}
                >
                  {item.category}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={MENU}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <>
            <HeaderTitle colour={COLOURS.RED}>{item.category}</HeaderTitle>
            <MenuList itemList={item.items} />
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
    paddingVertical: VALUES.SPACING.MEDIUM,
    flexDirection: 'row',
  },
  searchIcon: {
    marginRight: VALUES.SPACING.SMALL,
  },
  category: {
    paddingHorizontal: VALUES.SPACING.SMALL,
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
