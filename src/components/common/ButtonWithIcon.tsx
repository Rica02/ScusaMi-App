import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface ButtonWithIconProps {
  text: string;
  icon: React.ReactElement;
}

const ButtonWithIcon = (props: ButtonWithIconProps) => {
  const { text, icon } = props;

  const buttonIcon = React.cloneElement(icon, {
    size: VALUES.FONT_SIZE['2XLARGE'],
    color: COLOURS.WHITE,
  });

  return (
    <Pressable style={styles.container}>
      {buttonIcon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.GREEN,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOURS.WHITE,
    padding: VALUES.SPACING.SMALL,
  },
  text: {
    color: COLOURS.WHITE,
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    marginTop: VALUES.FONT_SIZE.XSMALL,
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlign: 'center',
  },
});
