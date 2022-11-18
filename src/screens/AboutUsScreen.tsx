import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { COLOURS } from '../constants/Colours';
import HeaderTitle from '../components/common/HeaderTitle';
import { useTranslation } from 'react-i18next';
import { VALUES } from '../constants/Styling';
import CustomButton from '../components/common/CustomButton';

interface AboutUsScreenProps {}

const AboutUsScreen = (props: AboutUsScreenProps) => {
  const { t } = useTranslation();
  const {} = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperContainer}>
        <HeaderTitle
          colour={COLOURS.RED}
          style={{
            textTransform: 'capitalize',
            fontSize: VALUES.FONT_SIZE['2XLARGE'],
          }}
        >
          {t('about_us.piacere')}
        </HeaderTitle>
        <Text style={styles.descText}>{t('about_us.description')}</Text>
        <HeaderTitle
          colour={COLOURS.GREY}
          style={{
            textTransform: 'capitalize',
            paddingBottom: VALUES.SPACING.MEDIUM,
          }}
        >
          {t('about_us.dolce_vita')}
        </HeaderTitle>
        <Image
          source={require('../../assets/images/ui-images/pizza.jpg')}
          style={styles.pizzaImg}
          resizeMode="contain"
        />
        <Text style={[styles.tradingTitle, styles.textBold]}>
          {t('about_us.ore_di_trading')}
        </Text>
        <Text style={styles.tradingText}>
          <Text style={styles.textBold}>{t('about_us.monday_thursday')}</Text>:{' '}
          12:00 pm - 10:00 pm
        </Text>
        <Text style={styles.tradingText}>
          <Text style={styles.textBold}>{t('about_us.fri_sat_sun')}</Text>:{' '}
          11:30 am - 10:00 pm
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={[styles.whiteText, styles.textBold]}>
          {t('about_us.address')}:
        </Text>
        <Text style={styles.whiteText}>
          The Glen, Pavillion Square Corner Snedden Drive & O’Sullivan Road,
          Glen Waverley VIC 3150
        </Text>
        <CustomButton
          onPress={() => console.log('')}
          style={styles.mapsButton}
          textStyle={[styles.mapsButtonText, styles.textBold]}
        >
          {t('buttons.view_in_maps')}
        </CustomButton>
        <Text style={styles.whiteText}>
          <Text style={styles.textBold}>{t('about_us.phone')}: </Text>
          (00) 0000 0000
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.queriesText}>{t('about_us.queries')}</Text>
        <CustomButton
          onPress={() => console.log('')}
          style={styles.contactButton}
          textStyle={styles.textBold}
        >
          {t('buttons.contact_us')}
        </CustomButton>
        <Image
          source={require('../../assets/images/ui-images/more-vino.jpg')}
          style={styles.vinoImg}
          resizeMode="contain"
        />
        <Text style={styles.copyrightText}>{t('about_us.copyright')}</Text>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },

  upperContainer: {
    alignItems: 'center',
    padding: VALUES.SPACING.MEDIUM,
  },
  descText: {
    textAlign: 'center',
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  pizzaImg: {
    height: '100%',
    width: 150,
    position: 'absolute',
    bottom: -25,
    right: 0,
    zIndex: -1,
  },
  tradingTitle: {
    color: COLOURS.RED,
    fontSize: VALUES.FONT_SIZE.LARGE,
    textTransform: 'uppercase',
    paddingVertical: VALUES.SPACING.LARGE,
  },
  tradingText: {
    paddingBottom: VALUES.SPACING.MEDIUM,
  },
  textBold: {
    fontWeight: '600',
    textAlign: 'center',
  },

  middleContainer: {
    backgroundColor: COLOURS.RED,
    padding: VALUES.SPACING.MEDIUM,
    alignItems: 'center',
  },
  whiteText: {
    color: COLOURS.WHITE,
    textAlign: 'center',
    paddingVertical: VALUES.SPACING.SMALL,
  },
  mapsButton: {
    backgroundColor: COLOURS.WHITE,
    width: '70%',
    marginVertical: VALUES.SPACING.SMALL,
  },
  mapsButtonText: {
    color: COLOURS.RED,
    textTransform: 'capitalize',
  },

  lowerContainer: {
    padding: VALUES.SPACING.MEDIUM,
    alignItems: 'center',
  },
  queriesText: {
    width: '70%',
    fontWeight: '600',
    paddingVertical: VALUES.SPACING.MEDIUM,
    textAlign: 'center',
  },
  contactButton: {
    width: '70%',
    backgroundColor: COLOURS.RED,
  },
  vinoImg: {
    marginVertical: VALUES.SPACING.MEDIUM,
    width: '100%',
    height: 200,
  },
  copyrightText: {
    fontStyle: 'italic',
    fontSize: VALUES.FONT_SIZE.XSMALL,
    textAlign: 'center',
    color: COLOURS.GREY,
  },
});
