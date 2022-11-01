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
              HomeScreen: 'one',
            },
          },
          MenuScreen: {
            screens: {
              MenuScreen: 'two',
            },
          },
          OrderScreen: {
            screens: {
              OrderScreen: 'three',
            },
          },
          ReserveScreen: {
            screens: {
              ReserveScreen: 'four',
            },
          },
          OtherScreen: {
            screens: {
              OtherScreen: 'five',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;