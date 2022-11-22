import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { VALUES } from '../../constants/Styling';
import CircleText from './CircleText';

interface NumberModifierProps {
  onPress: (num: number) => void;
}

const NumberModifier = (props: NumberModifierProps) => {
  const { onPress } = props;
  const [displayedNum, setDisplayedNum] = useState(1);

  const onMinusPress = () => {
    if (displayedNum > 1) {
      setDisplayedNum(displayedNum - 1);
    }
  };

  const onPlusPress = () => {
    setDisplayedNum(displayedNum + 1);
  };

  useEffect(() => {
    onPress(displayedNum);
  }, [displayedNum]);

  return (
    <View style={styles.container}>
      <Pressable onPress={onMinusPress}>
        <CircleText disabled={displayedNum < 2 ? true : false}>-</CircleText>
      </Pressable>
      <Text style={styles.number}>{displayedNum}</Text>
      <Pressable onPress={onPlusPress}>
        <CircleText disabled={false}>+</CircleText>
      </Pressable>
    </View>
  );
};

export default NumberModifier;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: VALUES.SPACING.SMALL,
  },
  number: {
    fontSize: VALUES.FONT_SIZE.LARGE,
    marginHorizontal: VALUES.SPACING.MEDIUM,
  },
});
