import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface CircleTextProps {
  children: JSX.Element | string;
  disabled?: boolean;
}

const CircleText = (props: CircleTextProps) => {
  const { children, disabled = false } = props;

  return (
    <View style={[styles.container, disabled && { opacity: 0.5 }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default CircleText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.TEAL,
    width: VALUES.SIZE.LARGE,
    height: VALUES.SIZE.LARGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: COLOURS.BLACK,
    fontFamily: 'caveat-brush',
    fontSize: VALUES.FONT_SIZE['XLARGE'],
  },
});
