import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>
        Total Item Dipesan: <Text style={styles.totalNumber}>{totalCount}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
  },
  totalNumber: {
    color: '#E65100',
  },
});
