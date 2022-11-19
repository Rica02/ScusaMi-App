import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VALUES } from '../../constants/Styling';
import CircleText from './CircleText';

interface NumberModifierProps {
  num: number;
}

const NumberModifier = (props: NumberModifierProps) => {
  const { num } = props;
  const [displayedNum, setDisplayedNum] = useState(num);

  return (
    <View style={styles.container}>
      <CircleText disabled={true}>-</CircleText>
      <Text style={styles.number}>{displayedNum}</Text>
      <CircleText disabled={false}>+</CircleText>
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
