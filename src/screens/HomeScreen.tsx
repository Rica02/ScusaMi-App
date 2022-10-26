import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import { RootTabScreenProps } from '../typings/navigationTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';
import ButtonWithIcon from '../components/common/ButtonWithIcon';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
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
          style={styles.beepBeep}
          source={require('../../assets/images/drawings/beep-beep.jpg')}
          resizeMode="contain"
        />
      </View>
      {/* Hungry? Mangia mangia */}
      <View style={styles.hungryContainer}>
        <View style={styles.hungryTitleContainer}>
          <Text style={styles.hungryText}>{t('home.hungry')}</Text>
          <Text style={styles.mangiaMangiaText}>{t('home.mangia_mangia')}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <ButtonWithIcon
              text={t('buttons.order_at_table')}
              icon={<Ionicons name="restaurant-outline" />}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonWithIcon
              text={t('buttons.order_pickup')}
              icon={<SimpleLineIcons name="bag" />}
            />
          </View>
        </View>
      </View>
      {/* Our menu */}
      <View style={styles.ourMenuContainer}>
        <HeaderTitle colour={COLOURS.BLACK}>{t('home.our_menu')}</HeaderTitle>
      </View>
      {/* Today's specials */}
      <View>
        <HeaderTitle colour={COLOURS.BLACK}>
          {t('home.todays_specials')}
        </HeaderTitle>
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
  beepBeep: {
    width: '80%',
    height: 200,
    alignSelf: 'flex-end',
    marginTop: -VALUES.SIZE['3XLARGE'],
  },

  hungryContainer: {},
  hungryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: VALUES.SPACING.MEDIUM,
  },
  hungryText: {
    fontFamily: 'caveat-brush',
    color: COLOURS.RED,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
  },
  mangiaMangiaText: {
    fontFamily: 'caveat-brush',
    color: COLOURS.BLACK,
    fontSize: VALUES.FONT_SIZE['2XLARGE'],
  },

  ourMenuContainer: {},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    width: '40%',
  },
});
