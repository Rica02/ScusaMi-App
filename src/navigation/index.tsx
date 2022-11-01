/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../typings/navigationTypes';
import { COLOURS } from '../constants/Colours';
import LinkingConfiguration from './LinkingConfiguration';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';
import ReserveScreen from '../screens/ReserveScreen';
import OtherScreen from '../screens/OtherScreen';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }: RootTabScreenProps<any>) => ({
        tabBarActiveTintColor: COLOURS.RED,
        tabBarStyle: {
          backgroundColor: COLOURS.BEIGE,
        },
        headerStyle: {
          backgroundColor: COLOURS.BEIGE,
        },
        headerLeft: () => (
          <Image
            style={{ marginLeft: 15, width: 30, height: 30 }}
            resizeMode="contain"
            source={require('../../assets/images/logos/secondary-logo.png')} // TODO: Replace with better image version
          />
        ),

        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Modal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome
              name="user-circle-o"
              size={30}
              color={COLOURS.BLACK}
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
      })}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="home"
              size={30}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={({ navigation }: RootTabScreenProps<'MenuScreen'>) => ({
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons
              name="book-open"
              size={30}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={({ navigation }: RootTabScreenProps<'OrderScreen'>) => ({
          title: 'Order',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="restaurant-outline"
              size={30}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="ReserveScreen"
        component={ReserveScreen}
        options={({ navigation }: RootTabScreenProps<'ReserveScreen'>) => ({
          title: 'Reserve',
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="calendar"
              size={30}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="OtherScreen"
        component={OtherScreen}
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => (
            <Feather
              name="more-horizontal"
              size={30}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}