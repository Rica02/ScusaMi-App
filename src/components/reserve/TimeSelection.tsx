import React, { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface TimeSelectionProps {
  time: string;
  onPress: (time: string) => void;
  selected: boolean;
}

const TimeSelection = (props: TimeSelectionProps) => {
  const { time, onPress, selected } = props;

  return (
    <Pressable
      style={[
        styles.container,
        selected && {
          borderColor: COLOURS.TEAL,
          backgroundColor: COLOURS.TEAL,
        },
      ]}
      onPress={() => onPress(time)}
    >
      <Text>{time}</Text>
    </Pressable>
  );
};

export default TimeSelection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: VALUES.SPACING.SMALL,
    paddingHorizontal: VALUES.SPACING.LARGE,
    marginVertical: VALUES.SPACING.XSMALL,
    marginHorizontal: VALUES.SPACING.XSMALL,
    borderWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
