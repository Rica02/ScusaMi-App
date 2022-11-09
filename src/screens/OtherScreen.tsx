import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';

export default function OtherScreen() {
  const { t } = useTranslation();
  const buttonLabels = [
    t('other.home'),
    t('other.browse_menu'),
    t('other.order'),
    t('other.reserve_table'),
    t('other.my_profile'),
    t('other.leave_feedback'),
    t('other.about_us'),
    t('other.settings'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <AntDesign name="close" size={30} color="COLOURS.BLACK" />
      </View>
      <View style={styles.buttonsContainer}>
        {buttonLabels.map((label, index) => (
          <Pressable key={index} style={styles.buttonContainer}>
            <Text style={styles.label}>{label}</Text>
          </Pressable>
        ))}
      </View>
      <HeaderTitle colour={COLOURS.RED}>{t('buttons.sign_in')}</HeaderTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: VALUES.SPACING.LARGE,
    marginBottom: VALUES.SPACING.LARGE,
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  buttonsContainer: {
    width: '100%',
    padding: 1.5 * VALUES.SPACING['2XLARGE'],
  },
  buttonContainer: {
    borderBottomWidth: 0.5,
    borderColor: COLOURS.GREY,
    padding: VALUES.SPACING.SMALL,
    marginBottom: VALUES.SPACING.MEDIUM,
  },
  label: {
    fontWeight: '500',
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
