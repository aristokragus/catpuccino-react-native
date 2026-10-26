import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 22000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
  { id: '4', nama: 'Donat Cakar Kucing', harga: 15000 },
  { id: '5', nama: 'Ice Choco Purr', harga: 20000 },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E65100" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catpuccino</Text>
        <Text style={styles.headerSubtitle}>Kafe Kucing Ramah & Nyaman</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {DAFTAR_MENU.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.harga}>Rp {item.harga.toLocaleString('id-ID')}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#E65100',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#FFE0B2',
    marginTop: 4,
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  harga: {
    fontSize: 14,
    color: '#E65100',
    marginTop: 4,
  },
});
