import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Entypo } from '@expo/vector-icons';

import { RootTabScreenProps } from '../typings/navigationTypes';
import { BrowseType, MenuItemType } from '../typings/menuTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import MenuList from '../components/menu/MenuList';
import OrderButtons from '../components/order/OrderButtons';

import { MENU } from '../DummyData';
import { MENU_MODE } from '../constants/AppConstants';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  const { t } = useTranslation();
  const [specials, setSpecials] = useState<MenuItemType[] | undefined>();

  useEffect(() => {
    // Get specials menu
    var specialsList = MENU.find((item) => item.category == 'Specials');
    setSpecials(specialsList?.items as MenuItemType[]);
  }, []);

  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.upperHeaderContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>
              <Text>{t('home.header')}</Text>
            </Text>
          </View>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logos/primary-logo.png')}
            resizeMode="contain"
          />
        </View>
        <Image
          style={styles.beepBeepImg}
          source={require('../../assets/images/ui-images/beep-beep.jpg')}
          resizeMode="contain"
        />
      </View>
      {/* Hungry? Mangia mangia */}
      <ImageBackground
        source={require('../../assets/images/photos/photo-pizza.png')}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.hungryTitleContainer}>
          <Text style={styles.hungryText}>{t('home.hungry')}</Text>
          <Text style={styles.mangiaText}>{t('home.mangia')}</Text>
          <Text style={styles.mangiaText}>{t('home.mangia')}!</Text>
        </View>
        <OrderButtons
          onPressDineIn={() =>
            navigation.navigate('MenuScreen', {
              mode: MENU_MODE.DINEIN as BrowseType,
            })
          }
          onPressTakeAway={() =>
            navigation.navigate('MenuScreen', {
              mode: MENU_MODE.TAKEAWAY as BrowseType,
            })
          }
        />
      </ImageBackground>
      {/* Our menu */}
      <View style={styles.ourMenuContainer}>
        <HeaderTitle colour={COLOURS.BLACK}>{t('home.our_menu')}</HeaderTitle>
        <View style={styles.ourMenuImgContainer}>
          <Image
            style={styles.scooterImg}
            source={require('../../assets/images/ui-images/scooter.png')}
            resizeMode="contain"
          />
          <View style={styles.seeOurMenuContainer}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/images/ui-images/menu-1.png')}
              resizeMode="contain"
            />
            <Pressable
              style={styles.arrow}
              onPress={() =>
                navigation.navigate('MenuScreen', {
                  mode: MENU_MODE.BROWSE as BrowseType,
                })
              }
            >
              <Entypo name="arrow-bold-right" size={120} color={COLOURS.RED} />
            </Pressable>
          </View>
        </View>
      </View>
      {/* Today's specials */}
      <View style={styles.todaysSpecialsContainer}>
        <HeaderTitle colour={COLOURS.WHITE}>
          {t('home.todays_specials')}
        </HeaderTitle>
        <MenuList
          itemList={specials}
          onPress={(item) =>
            navigation.navigate('MenuItemModal', {
              title: item.name,
              item: item,
              mode: MENU_MODE.BROWSE as BrowseType,
            })
          }
        />
        <Text style={styles.comeBackSpecialsText}>
          {t('home.come_back_specials')}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  headerContainer: {
    padding: VALUES.SPACING.MEDIUM,
  },
  upperHeaderContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: VALUES.SPACING.MEDIUM,
  },
  headerText: {
    fontFamily: 'caveat-brush',
    color: COLOURS.RED,
    fontSize: VALUES.FONT_SIZE['XLARGE'],
    textAlign: 'center',
    flexWrap: 'wrap',
    textTransform: 'uppercase',
  },
  logo: {
    width: VALUES.SIZE['4XLARGE'],
    height: VALUES.SIZE['4XLARGE'],
  },
  beepBeepImg: {
    width: '80%',
    height: 200,
    alignSelf: 'flex-end',
    marginTop: -VALUES.SIZE['3XLARGE'],
  },

  hungryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: VALUES.SPACING.LARGE,
  },
  hungryText: {
    fontFamily: 'caveat-brush',
    paddingRight: VALUES.SPACING.XSMALL,
    color: COLOURS.RED,
    fontSize: 1.3 * VALUES.FONT_SIZE['2XLARGE'],
    textShadowColor: COLOURS.WHITE,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    textTransform: 'uppercase',
  },
  mangiaText: {
    fontFamily: 'caveat-brush',
    paddingLeft: VALUES.SPACING.XSMALL,
    color: COLOURS.BLACK,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
    textShadowColor: COLOURS.WHITE,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    transform: [{ rotate: '-15deg' }],
  },

  ourMenuContainer: {
    flex: 1,
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  ourMenuImgContainer: {
    flexDirection: 'row',
    marginTop: VALUES.SPACING.SMALL,
    marginRight: VALUES.SPACING.SMALL,
  },
  scooterImg: {
    width: '60%',
    height: 200,
    alignSelf: 'flex-end',
  },
  seeOurMenuContainer: {
    width: '55%',
    height: 200,
    position: 'absolute',
    right: 0,
  },
  menuImg: {
    width: '100%',
    height: 150,
  },
  arrow: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  todaysSpecialsContainer: {
    backgroundColor: COLOURS.RED,
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  comeBackSpecialsText: {
    color: COLOURS.BEIGE,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
