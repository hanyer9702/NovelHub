import React from 'react';
import { Image, Linking, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { NOVELS } from '../../constants/mocks';

export default function NovelDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const novel = NOVELS.find(item => item.id === id);

  if (!novel) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>작품을 찾을 수 없습니다</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleOpenPlatform = () => {
    Linking.openURL(novel.platformUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: novel.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.title}>{novel.title}</Text>
        <Text style={styles.author}>{novel.author}</Text>
        <Pressable style={styles.button} onPress={handleOpenPlatform}>
          <Text style={styles.buttonText}>플랫폼에서 보기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  thumbnail: {
    width: 160,
    height: 160,
    borderRadius: 12,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  author: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#111',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
