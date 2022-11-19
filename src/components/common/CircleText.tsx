import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface CircleTextProps {
  children: JSX.Element | string;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

const CircleText = (props: CircleTextProps) => {
  const { children, disabled = false, textStyle } = props;

  return (
    <View style={[styles.container, disabled && { opacity: 0.5 }]}>
      <Text style={[styles.text, textStyle && textStyle]}>{children}</Text>
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
    //fontFamily: 'caveat-brush',
    fontSize: VALUES.FONT_SIZE.LARGE,
  },
});
