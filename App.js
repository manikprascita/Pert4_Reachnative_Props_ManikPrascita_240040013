import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Latte', harga: 25000, gambar: require('./assets/Latte.png') },
  { id: '2', nama: 'Matcha Latte', harga: 30000, gambar: require('./assets/Matcha Latte.png') },
  { id: '3', nama: 'Ice Chocolate', harga: 20000, gambar: require('./assets/Ice Chocolate.png') },
  { id: '4', nama: 'Butterscotch Latte', harga: 35000, gambar: require('./assets/Butterscotch Latte.png') },
  { id: '5', nama: 'Lemon Tea', harga: 15000, gambar: require('./assets/Lemon Tea.png') },
  { id: '6', nama: 'Air Mineral', harga: 12000, gambar: require('./assets/Air Mineral.png') },
  { id: '7', nama: 'Croissant Chocolate', harga: 28000, gambar: require('./assets/Croissant.png') },
  { id: '8', nama: 'Cookies', harga: 23000, gambar: require('./assets/Cookies.png') },
  { id: '9', nama: 'Kentang Goreng', harga: 18000, gambar: require('./assets/Kentang Goreng.png') },
  { id: '10', nama: 'Cappuccino', harga: 22000, gambar: require('./assets/Cappuccino.png') },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan((prev) => prev + 1);
  };

  const handleBatalPesanan = () => {
    setTotalPesanan((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.judul}> Kafe Kucing</Text>
        <Text style={styles.subjudul}>Pilih menu </Text>
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <FlatList
        data={DAFTAR_MENU}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <MenuItem
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahPesanan}
            onBatalPesanan={handleBatalPesanan}
            gambar={item.gambar}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0', paddingTop: 40 },
  header: { paddingHorizontal: 20, paddingBottom: 12 },
  judul: { fontSize: 28, fontWeight: 'bold', color: '#5D4037' },
  subjudul: { fontSize: 14, color: '#8D6E63', marginTop: 2 },
  list: { padding: 16 },
});