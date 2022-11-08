import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface TimeSelectionProps {
  time: string;
  onPress: () => void;
}

const TimeSelection = (props: TimeSelectionProps) => {
  const { time, onPress } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{time}</Text>
    </Pressable>
  );
};

export default TimeSelection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: VALUES.SPACING.SMALL,
    paddingHorizontal: VALUES.SPACING.MEDIUM,
    marginVertical: VALUES.SPACING.XSMALL,
    marginHorizontal: VALUES.SPACING.SMALL,
    borderWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
