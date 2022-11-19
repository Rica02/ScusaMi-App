import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import HeaderTitle from '../components/common/HeaderTitle';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';

interface SettingsScreenProps {
  navigation: any;
}

const SettingsScreen = (props: SettingsScreenProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [notifToggle, setNotifToggle] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <HeaderTitle colour={COLOURS.RED}>{t('settings.settings')}</HeaderTitle>
      </View>
      <View style={styles.row}>
        <Text>{t('settings.notifications')}</Text>
        <Switch
          trackColor={{ true: COLOURS.GREEN }}
          onValueChange={() => setNotifToggle(!notifToggle)}
          value={notifToggle}
        />
      </View>
      <View style={styles.row}>
        <Text>{t('reserve.terms_and_conditions')}</Text>
        <Pressable>
          <Text>
            <Text style={styles.pressableText}>{t('settings.view')}</Text>
            {' >'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable onPress={() => navigation.navigate('ContactUsModal')}>
          <Text style={styles.pressableText}>
            {t('settings.bug_or_suggestion')}
          </Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable>
          <Text style={[styles.pressableText, styles.redText]}>
            {t('buttons.delete_account')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.WHITE,
  },
  row: {
    borderBottomWidth: 0.5,
    borderColor: COLOURS.TEXT_PLACEHOLDER,
    padding: VALUES.SPACING.LARGE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressableText: {
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: COLOURS.BLACK,
  },
  redText: {
    color: COLOURS.RED,
  },
});
