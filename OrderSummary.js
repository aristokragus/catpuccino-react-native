import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total Item Dipesan: {totalCount}</Text>

      {totalCount >= 5 && (
        <View style={styles.promoBox}>
          <Text style={styles.promoText}>
            🎉 Selamat! Anda Mendapatkan Diskon 10%
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
  },
  promoBox: {
    marginTop: 8,
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  promoText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },
});
