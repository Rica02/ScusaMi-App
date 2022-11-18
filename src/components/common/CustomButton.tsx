import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface CustomButtonProps {
  children: JSX.Element | string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, onPress, style, textStyle } = props;

  return (
    <Pressable style={[styles.container, style && style]} onPress={onPress}>
      <Text style={[styles.text, textStyle && textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    padding: VALUES.SPACING.SMALL,
  },
  text: {
    color: COLOURS.WHITE,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    textTransform: 'uppercase',
  },
});
