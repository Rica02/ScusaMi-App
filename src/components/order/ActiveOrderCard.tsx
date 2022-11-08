import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';

interface ActiveOrderCardProps {
  onPress: (order: any) => void;
}

const ActiveOrderCard = (props: ActiveOrderCardProps) => {
  const { onPress } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Text>Order placed 10 minutes ago</Text>
        <Text>Monday, 10th October 2022 at 2:19 pm</Text>
        <Text>Dine-in at Table 1</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.numItemsText}>3 item(s)</Text>
        <View style={styles.viewProgressContainer}>
          <Text style={styles.viewProgressText}>View progress</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </Pressable>
  );
};

export default ActiveOrderCard;

const styles = StyleSheet.create({
  container: {
    padding: VALUES.SPACING.MEDIUM,
    backgroundColor: COLOURS.WHITE,
  },

  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: VALUES.SPACING.SMALL,
  },
  numItemsText: {
    color: COLOURS.GREY,
  },
  viewProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProgressText: {
    fontWeight: '600',
  },
});
