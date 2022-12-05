import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

import { UserType } from '../typings/userTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import HeaderTitle from '../components/common/HeaderTitle';

import { USER } from '../DummyData';

interface OtherScreenProps {
  navigation: any;
}

export default function OtherScreen(props: OtherScreenProps) {
  const { navigation } = props;
  const { t } = useTranslation();
  const [user, setUser] = useState<UserType | undefined>();

  useEffect(() => {
    // TODO: sign in info would be obtained from backend
    setUser(USER);
  }, []);

  const buttons = [
    {
      desc: t('other.home'),
      func: function () {
        navigation.navigate('Root', { screen: 'HomeScreen' });
      },
    },
    {
      desc: t('other.browse_menu'),
      func: function () {
        navigation.navigate('Root', { screen: 'MenuScreen' });
      },
    },
    {
      desc: t('other.order'),
      func: function () {
        navigation.navigate('Root', {
          screen: 'Order',
          param: { screen: 'OrderScreen' },
        });
      },
    },
    {
      desc: t('other.reserve_table'),
      func: function () {
        navigation.navigate('Root', { screen: 'ReserveScreen' });
      },
    },
    {
      desc: t('other.my_profile'),
      func: function () {
        if (user) {
          navigation.navigate('Other', { screen: 'ProfileScreen' });
        } else {
          navigation.navigate('ProfileLoginModal');
        }
      },
    },
    {
      desc: t('other.leave_feedback'),
      func: function () {
        navigation.navigate('ContactUsModal');
      },
    },
    {
      desc: t('other.about_us'),
      func: function () {
        navigation.navigate('Other', { screen: 'AboutUsScreen' });
      },
    },
    {
      desc: t('other.settings'),
      func: function () {
        navigation.navigate('Other', { screen: 'SettingsScreen' });
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={styles.buttonContainer}
            onPress={button.func}
          >
            <Text style={styles.label}>{button.desc}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        onPress={() => {
          if (user) {
            navigation.navigate('Other', { screen: 'ProfileScreen' });
          } else {
            navigation.navigate('ProfileLoginModal');
          }
        }}
      >
        <HeaderTitle colour={COLOURS.RED}>{t('buttons.sign_in')}</HeaderTitle>
      </Pressable>
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
