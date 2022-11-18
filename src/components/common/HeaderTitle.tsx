import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { VALUES } from '../../constants/Styling';

interface HeaderTitleProps {
  children: JSX.Element | string;
  colour: string;
  style?: StyleProp<TextStyle>;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const { children, colour, style } = props;

  return (
    <Text style={[styles.text, { color: colour }, style && style]}>
      {children}
    </Text>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'caveat-brush',
    fontSize: VALUES.FONT_SIZE['XLARGE'],
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
