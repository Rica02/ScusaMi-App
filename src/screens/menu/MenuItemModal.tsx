import React, { useEffect, useState } from 'react';
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
  TextInput,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

import { RootStackScreenProps } from '../../typings/navigationTypes';
import { NutriInfoValue } from '../../typings/menuTypes';
import { MENU_MODE } from '../../constants/AppConstants';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../../components/common/CustomButton';
import NumberModifier from '../../components/common/NumberModifier';

export default function MenuItemModal({
  navigation,
  route,
}: RootStackScreenProps<'MenuItemModal'>) {
  const { item, mode, onAddToOrderPress } = route.params;
  const { t } = useTranslation();
  const [nutriInfo, setNutriInfo] = useState<string[]>([]);
  const [numItem, setNumItem] = useState(1);

  useEffect(() => {
    // Set array for nutritional info table
    if (item.nutriInfo) {
      setNutriInfo(
        Object.keys(item.nutriInfo) as Array<
          keyof {
            'gluten free': NutriInfoValue;
            vegetarian: NutriInfoValue;
            takeaway: NutriInfoValue;
          }
        >
      );
    }
  }, []);

  // Render nutritional info icon (w = with charge | y = yes | n = no)
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
        {item.image ? (
          <ImageBackground
            source={{ uri: item.image }}
            style={[styles.image, { height: Dimensions.get('window').width }]}
            resizeMode="cover"
          >
            {item.price2 ? (
              <Text style={styles.priceTextOnImage}>
                ${Number(item.price).toFixed(2)} / $
                {Number(item.price2).toFixed(2)}
              </Text>
            ) : (
              <Text style={styles.priceTextOnImage}>
                ${Number(item.price).toFixed(2)}
              </Text>
            )}
          </ImageBackground>
        ) : (
          // Price without image
          <View>
            {item.price2 ? (
              <Text style={styles.priceText}>
                ${Number(item.price).toFixed(2)} / $
                {Number(item.price2).toFixed(2)}
              </Text>
            ) : (
              <Text style={styles.priceText}>
                ${Number(item.price).toFixed(2)}
              </Text>
            )}
          </View>
        )}

        <View style={styles.lowerContainer}>
          {/* Food item description */}
          <Text style={styles.descriptionText}>{item.description}</Text>

          {item.nutriInfo && (
            <View style={styles.table}>
              {/* Nutritional info table */}
              {nutriInfo.map((key, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={[styles.tableCell, styles.tableColumnLeft]}>
                    <Text style={styles.tableCellText}>{key}</Text>
                  </View>
                  {item.nutriInfo && (
                    <View style={styles.tableCell}>
                      {renderPropertyIcon(
                        item.nutriInfo[key as keyof typeof item.nutriInfo]
                      )}
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* For order mode (dine-in / takeaway) */}
          {mode != MENU_MODE.BROWSE && (
            <View>
              {item.modifiers && (
                <View>
                  {/* Remove ingredients */}
                  {item.modifiers.remove && (
                    <View>
                      <Text
                        style={[styles.modifierTitle, { color: COLOURS.RED }]}
                      >
                        {t('menu.remove')}
                      </Text>
                      {item.modifiers.remove.map((item, index) => (
                        <View key={index} style={styles.modifierCheckbox}>
                          <Checkbox
                          // value={}
                          // onValueChange={}
                          // color={}
                          />
                          <Text style={styles.checkboxLabel}>{item}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                  {/* Add ingredients */}
                  {item.modifiers.add && (
                    <View>
                      <Text
                        style={[styles.modifierTitle, { color: COLOURS.GREEN }]}
                      >
                        <Text>{t('menu.add_extras')}</Text>
                        <Text
                          style={{
                            color: COLOURS.GREY,
                            textTransform: 'none',
                            fontWeight: 'normal',
                          }}
                        >
                          {'  '}
                          {t('menu.max_3')}
                        </Text>
                      </Text>
                      {item.modifiers.add.map((item, index) => (
                        <View style={styles.modifierCheckbox}>
                          <Checkbox
                          // value={}
                          // onValueChange={}
                          // color={}
                          />
                          <Text style={styles.checkboxLabel}>
                            {item.addOnName}{' '}
                            <Text style={{ color: COLOURS.GREY }}>
                              +${item.addOnPrice}
                            </Text>
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              )}

              {/* Add notes */}
              <View>
                <Text style={[styles.modifierTitle, { color: COLOURS.BLACK }]}>
                  {t('menu.add_notes')}
                </Text>
                <TextInput
                  style={styles.textArea}
                  multiline
                  textAlignVertical="top"
                  placeholder={t('menu.extras_charge')}
                />
              </View>

              {/* Add to order */}
              <View style={styles.addToOrderContainer}>
                <NumberModifier onPress={(num) => setNumItem(num)} />
                <CustomButton
                  style={styles.addToOrderButton}
                  onPress={() => {
                    if (onAddToOrderPress) {
                      onAddToOrderPress(numItem, item);
                      navigation.goBack();
                    }
                  }}
                >
                  {`${t('buttons.add_to_order')} $${Number(item.price).toFixed(
                    2
                  )}`}
                </CustomButton>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Start order button for browse menu mode */}
      {mode == MENU_MODE.BROWSE && (
        <CustomButton
          style={styles.startOrderButton}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'Order',
              params: { screen: 'OrderScreen' },
            })
          }
        >
          {t('buttons.start_order')}
        </CustomButton>
      )}
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
  priceTextOnImage: {
    padding: VALUES.SPACING.SMALL,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
    fontWeight: '700',
    color: COLOURS.WHITE,
    textShadowColor: COLOURS.BLACK,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  priceText: {
    paddingHorizontal: VALUES.SPACING.MEDIUM,
    paddingTop: VALUES.SPACING.MEDIUM,
    fontSize: VALUES.FONT_SIZE.XLARGE,
    color: COLOURS.BLACK,
    textAlign: 'center',
  },
  lowerContainer: {
    padding: VALUES.SPACING.MEDIUM,
    marginBottom: VALUES.SPACING['2XLARGE'],
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

  modifierTitle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingVertical: VALUES.SPACING.SMALL,
  },
  modifierCheckbox: {
    flexDirection: 'row',
    paddingBottom: VALUES.SPACING.SMALL,
  },
  checkboxLabel: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingLeft: VALUES.SPACING.SMALL,
  },
  textArea: {
    flex: 1,
    borderWidth: 0.5,
    padding: VALUES.SPACING.MEDIUM,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    backgroundColor: COLOURS.BEIGE,
    height: 120,
    marginBottom: VALUES.SPACING.MEDIUM,
  },
  addToOrderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToOrderButton: {
    paddingHorizontal: VALUES.SPACING.MEDIUM,
  },
});
