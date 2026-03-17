import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NovelCardProps {
  title: string;
  author: string;
  thumbnail: string;
}

const NovelCard: React.FC<NovelCardProps> = ({ title, author, thumbnail }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default NovelCard;
