/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BrowseType, MenuItemType, OrderType } from './menuTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ProfileLoginModal: undefined;
  MenuItemModal: {
    title: string;
    item: MenuItemType;
    mode: BrowseType;
    onAddToOrderPress: (num: number, item: MenuItemType) => void;
  };
  ActiveOrderModal: { order: any };
  ContactUsModal: undefined;
  OrderCartModal: { order: OrderType };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  MenuScreen: { mode: BrowseType };
  Order: NavigatorScreenParams<NestedParamList> | undefined;
  ReserveScreen: undefined;
  Other: NavigatorScreenParams<NestedParamList> | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type NestedParamList = {
  OtherScreen: undefined;
  ProfileScreen: undefined;
  AboutUsScreen: undefined;
  SettingsScreen: undefined;
  OrderScreen: undefined;
  OrderConfirmationScreen: undefined;
};

export type NestedScreenProps<Screen extends keyof NestedParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<NestedParamList, Screen>,
    NativeStackScreenProps<RootTabParamList>
  >;
