import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { NOVELS } from '../constants/mocks';

const HomeScreen = () => {
  const renderItem = ({ item }: { item: (typeof NOVELS)[number] }) => (
    <Link href={`/novel/${item.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={NOVELS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  separator: {
    height: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#eaeaea',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  author: {
    marginTop: 4,
    fontSize: 13,
    color: '#666',
  },
});

export default HomeScreen;
