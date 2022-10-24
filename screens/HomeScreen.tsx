import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import { COLOURS } from '../constants/Colours';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { THEME } from '../constants/Styling';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.upperHeaderContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>
              <Text>
                Ciao! We are italiano{'\n'}Classico, casuale & cultured
              </Text>
            </Text>
          </View>
          <Image
            style={styles.logo}
            source={require('../assets/images/logos/primary-logo.png')}
            resizeMode="contain"
          />
        </View>
        <Image
          style={styles.beepBeep}
          source={require('../assets/images/drawings/beep-beep.jpg')}
          resizeMode="contain"
        />
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
    borderWidth: 1,
    borderColor: 'red',
  },
  upperHeaderContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontFamily: 'caveat-brush',
    color: COLOURS.RED,
    fontSize: THEME.FONT_SIZES['2XLARGE'],
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    width: 100,
    height: 100,
  },
  beepBeep: {
    width: '100%',
    height: '100%',
  },
});
