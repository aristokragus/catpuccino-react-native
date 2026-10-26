import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const formatRupiah = (angka) => {
  return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default function MenuItem({ nama, harga }) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>{formatRupiah(harga)}</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.qty}>0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  nama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212121',
  },
  harga: {
    fontSize: 13,
    color: '#E65100',
    marginTop: 4,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qty: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 12,
  },
});
