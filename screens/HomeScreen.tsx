import { StyleSheet, View, Text } from 'react-native';

import { COLOURS } from '../constants/Colours';
import { RootTabScreenProps } from '../types';
import React from 'react';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          <Text>Ciao! We are italiano</Text>
          <Text>Classico, casuale & cultured</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontFamily: 'caveat-brush',
    color: COLOURS.BLACK,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
