/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../typings/navigationTypes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              HomeScreen: 'home',
            },
          },
          MenuScreen: {
            screens: {
              MenuScreen: 'menu',
            },
          },
          OrderScreen: {
            screens: {
              OrderScreen: 'order',
            },
          },
          ReserveScreen: {
            screens: {
              ReserveScreen: 'reserve',
            },
          },
          // OtherScreen: {
          //   screens: {
          //     OtherScreen: 'other',
          //   },
          // },
          Other: {
            screens: {
              OtherScreen: 'other',
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
      //ProfileScreen: 'profile',
      ActiveOrderModal: 'modal',
      MenuItemModal: 'modal',
      ProfileLoginModal: 'modal',
    },
  },
};

export default linking;
