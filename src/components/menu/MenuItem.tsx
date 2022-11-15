import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { MenuItemType } from '../../typings/menuTypes';
import { RootTabScreenProps } from '../../typings/navigationTypes';

interface MenuItemProps {
  primaryIndex: boolean;
  item: MenuItemType;
  onPress: (item: MenuItemType) => void;
}
const MenuItem = (props: MenuItemProps) => {
  const { primaryIndex, item, onPress } = props;

  return (
    <Pressable style={styles.container} onPress={() => onPress(item)}>
      {primaryIndex && (
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.description} numberOfLines={4}>
          {item.description}
        </Text>
      </View>
      {!primaryIndex && (
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOURS.WHITE,
    shadowColor: COLOURS.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // TODO: check android
  },
  image: {
    width: 110,
    height: 110,
  },
  textContainer: {
    flex: 1,
    padding: VALUES.SPACING.SMALL,
  },
  name: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
  },
  description: {
    color: COLOURS.GREY,
    paddingTop: VALUES.SPACING.SMALL,
  },
});
