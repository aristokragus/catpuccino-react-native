import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import OrderSummary from './OrderSummary';
import MenuItem from './MenuItem';

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const DAFTAR_MENU = [
    { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
    { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
    { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
    { id: '4', nama: 'Donat Cakar Kucing', harga: 15000 },
    { id: '5', nama: 'Ice Choco Purr', harga: 22000 },
  ];

  const handleTambahPesanan = (delta) => {
    setTotalPesanan((prev) => Math.max(0, prev + delta));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#E65100" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catpuccino</Text>
        <Text style={styles.headerSubtitle}>Silakan pilih menu pesanan Anda</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <OrderSummary totalCount={totalPesanan} />

        <Text style={styles.sectionTitle}>Daftar Menu</Text>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahPesanan}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#E65100',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  container: {
    padding: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 10,
    marginLeft: 2,
  },
});
