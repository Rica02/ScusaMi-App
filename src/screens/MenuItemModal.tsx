import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RootStackScreenProps } from '../typings/navigationTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import CustomButton from '../components/common/CustomButton';

export default function MenuItemModal({
  route,
}: RootStackScreenProps<'MenuItemModal'>) {
  const { item } = route.params;
  const { t } = useTranslation();

  const data = [
    { title: 'gluten', property: 'w' },
    { title: 'vegetarian', property: 'n' },
    { title: 'takeaway', property: 'y' },
  ];

  const renderPropertyIcon = (value: string) => {
    switch (value) {
      case 'y':
        return (
          <Feather
            name="check-circle"
            size={VALUES.FONT_SIZE.LARGE}
            color={COLOURS.GREEN}
          />
        );
        break;
      case 'n':
        return (
          <Feather name="x" size={VALUES.FONT_SIZE.LARGE} color={COLOURS.RED} />
        );
        break;
      case 'w':
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Feather
              name="alert-circle"
              size={VALUES.FONT_SIZE.LARGE}
              color="orange"
            />
            <Text
              style={{
                paddingLeft: VALUES.FONT_SIZE.XSMALL,
                fontSize: VALUES.FONT_SIZE.SMALL,
                color: COLOURS.TEXT_GREY,
              }}
            >
              ({t('menu.extra_charge')})
            </Text>
          </View>
        );
        break;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <ScrollView>
        <ImageBackground
          source={{ uri: item.image }}
          style={[styles.image, { height: Dimensions.get('window').width }]}
          resizeMode="cover"
        >
          <Text style={styles.priceText}>$35.90</Text>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.descriptionText}>
            {item.description}
            {item.description}
            {item.description}
          </Text>
          <View style={styles.table}>
            {data.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={[styles.tableCell, styles.tableColumnLeft]}>
                  <Text style={styles.tableCellText}>{item.title}</Text>
                </View>
                <View style={styles.tableCell}>
                  {renderPropertyIcon(item.property)}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <CustomButton style={styles.startOrderButton}>
        {t('buttons.start_order')}
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  image: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  priceText: {
    padding: VALUES.SPACING.SMALL,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
    fontWeight: '700',
    color: COLOURS.WHITE,
    textShadowColor: COLOURS.BLACK,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  lowerContainer: {
    padding: VALUES.SPACING.MEDIUM,
    marginBottom: VALUES.SPACING['3XLARGE'],
  },
  descriptionText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
  },
  table: {
    marginVertical: VALUES.SPACING.LARGE,
    backgroundColor: COLOURS.BEIGE,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  tableCell: {
    flex: 1,
    padding: VALUES.SPACING.SMALL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableColumnLeft: {
    borderRightWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
  },
  tableCellText: {
    textTransform: 'uppercase',
    fontSize: VALUES.FONT_SIZE.SMALL,
  },
  startOrderButton: {
    position: 'absolute',
    left: VALUES.FONT_SIZE.MEDIUM,
    right: VALUES.FONT_SIZE.MEDIUM,
    bottom: VALUES.FONT_SIZE['2XLARGE'],
  },
});
