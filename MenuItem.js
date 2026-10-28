import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty(prev => prev + 1);
    onTambahPesanan(1);
  };

  const handleKurang = () => {
    if (qty > 0) {
      setQty(prev => prev - 1);
      onTambahPesanan(-1);
    }
  };

  const formatRupiah = (angka) => {
    return 'Rp ' + angka.toLocaleString('id-ID');
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.namaText}>{nama}</Text>
        <Text style={styles.hargaText}>{formatRupiah(harga)}</Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.btn, qty === 0 && styles.btnDisabled]}
          onPress={handleKurang}
          disabled={qty === 0}
        >
          <Text style={[styles.btnText, qty === 0 && styles.btnTextDisabled]}>-</Text>
        </TouchableOpacity>

        <Text style={styles.qtyText}>{qty}</Text>

        <TouchableOpacity style={styles.btn} onPress={handleTambah}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    flex: 1,
  },
  namaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  hargaText: {
    fontSize: 14,
    color: '#666666',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  btnDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    lineHeight: 20,
  },
  btnTextDisabled: {
    color: '#BDBDBD',
  },
  qtyText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 12,
    minWidth: 18,
    textAlign: 'center',
    color: '#212121',
  },
});
