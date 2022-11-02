import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface CustomButtonProps {
  children: JSX.Element | string;
  style?: StyleProp<ViewStyle>;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, style } = props;

  return (
    <Pressable style={[styles.container, style && style]}>
      <Text style={styles.text}>{children}</Text>
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
