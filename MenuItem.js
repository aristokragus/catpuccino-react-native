import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const formatRupiah = (angka) => {
  return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default function MenuItem({ nama, harga }) {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty((prev) => prev + 1);
  };

  const handleKurang = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>{formatRupiah(harga)}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity style={styles.button} onPress={handleKurang}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{qty}</Text>
        <TouchableOpacity style={styles.button} onPress={handleTambah}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#E65100',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 12,
  },
});
