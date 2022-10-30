import { Text, StyleSheet } from 'react-native';
import { VALUES } from '../../constants/Styling';

interface HeaderTitleProps {
  children: JSX.Element;
  colour: string;
}

const HeaderTitle = (props: HeaderTitleProps) => {
  const { children, colour } = props;

  return <Text style={[styles.text, { color: colour }]}>{children}</Text>;
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
