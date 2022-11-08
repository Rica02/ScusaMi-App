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
import { NutriInfoValue } from '../typings/menuTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import CustomButton from '../components/common/CustomButton';

export default function MenuItemModal({
  route,
}: RootStackScreenProps<'MenuItemModal'>) {
  const { item } = route.params;
  const { t } = useTranslation();

  let nutriInfo = Object.keys(item.nutriInfo) as Array<
    keyof {
      'gluten free': NutriInfoValue;
      vegetarian: NutriInfoValue;
      takeaway: NutriInfoValue;
    }
  >;

  const renderPropertyIcon = (value: NutriInfoValue) => {
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
                color: COLOURS.GREY,
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
        {/* Image and price(s) */}
        <ImageBackground
          source={{ uri: item.image }}
          style={[styles.image, { height: Dimensions.get('window').width }]}
          resizeMode="cover"
        >
          {item.price2 ? (
            <Text style={styles.priceText}>
              ${item.price} / ${item.price2}
            </Text>
          ) : (
            <Text style={styles.priceText}>${item.price}</Text>
          )}
        </ImageBackground>
        <View style={styles.lowerContainer}>
          {/* Food item description */}
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.table}>
            {/* Nutritional info table */}
            {nutriInfo.map((key, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={[styles.tableCell, styles.tableColumnLeft]}>
                  <Text style={styles.tableCellText}>{key}</Text>
                </View>
                <View style={styles.tableCell}>
                  {renderPropertyIcon(item.nutriInfo[key])}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Start order button */}
      <CustomButton
        style={styles.startOrderButton}
        onPress={() => console.log('start order pressed')}
      >
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
