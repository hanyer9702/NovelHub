import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import { NOVELS } from '../constants/mocks';

const HomeScreen = () => {
  const renderItem = ({ item }: { item: (typeof NOVELS)[number] }) => (
    <Link href={`/novel/${item.id}`} asChild>
      <Pressable style={styles.row}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <Feather name="chevron-right" size={34} color="#a1a1aa" />
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={36} color="#111827" />
        <Text style={styles.headerTitle}>웹소설</Text>
        <Feather name="search" size={36} color="#111827" />
      </View>

      <FlatList
        data={NOVELS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.tabBar}>
        <Pressable style={styles.tabButton}>
          <Ionicons name="home" size={35} color="#111827" />
          <Text style={styles.tabLabelActive}>홈</Text>
        </Pressable>

        <Pressable style={styles.tabButton}>
          <Feather name="search" size={33} color="#6b7280" />
          <Text style={styles.tabLabel}>검색</Text>
        </Pressable>

        <Pressable style={styles.tabButton}>
          <Feather name="bookmark" size={33} color="#6b7280" />
          <Text style={styles.tabLabel}>즐겨찾기</Text>
        </Pressable>

        <Pressable style={styles.tabButton}>
          <Feather name="user" size={33} color="#6b7280" />
          <Text style={styles.tabLabel}>내정보</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 50 / 3,
    fontWeight: '700',
    color: '#111827',
  },
  list: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#ececec',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 134,
    paddingVertical: 13,
  },
  thumbnail: {
    width: 104,
    height: 104,
    borderRadius: 14,
    backgroundColor: '#e5e7eb',
  },
  info: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  title: {
    fontSize: 25 / 1.5,
    fontWeight: '800',
    color: '#111827',
  },
  author: {
    marginTop: 10,
    fontSize: 20 / 1.5,
    fontWeight: '500',
    color: '#8b8b8b',
  },
  tabBar: {
    height: 92,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 6,
    paddingTop: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabelActive: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  tabLabel: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
});

export default HomeScreen;
