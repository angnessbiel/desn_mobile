import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function MemoryApp() {
  const [memories, setMemories] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const loadMemories = async () => {
      const storedMemories = await AsyncStorage.getItem('memories');
      if (storedMemories) {
        setMemories(JSON.parse(storedMemories));
      }
    };
    loadMemories();
  }, []);

  const saveMemory = async () => {
    const newMemory = { title, year, city, description, image };
    const updatedMemories = [...memories, newMemory];
    setMemories(updatedMemories);
    await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setYear('');
    setCity('');
    setDescription('');
    setImage('');
  };

  const clearMemories = async () => {
    await AsyncStorage.clear();
    setMemories([]);
  };

  const removeMemory = async (index) => {
    const updatedMemories = memories.filter((_, i) => i !== index);
    setMemories(updatedMemories);
    await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para utilizar a câmera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Memórias</Text>

      <FlatList
        data={memories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.memoryItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.year} - {item.city}</Text>
            <Text>{item.description}</Text>
            <Button title="Remover" onPress={() => removeMemory(index)} />
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma memória salva.</Text>}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Quando aconteceu? (ano)"
          keyboardType="numeric"
          value={year}
          onChangeText={setYear}
        />
        <TextInput
          style={styles.input}
          placeholder="Onde aconteceu? (cidade)"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Conte sobre sua memória"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Adicionar foto da galeria" onPress={pickImage} />
        <Button title="Tirar uma foto" onPress={takePhoto} />
        {image ? <Image source={{ uri: image }} style={styles.imagePreview} /> : null}

        <Button title="Adicionar memória" onPress={saveMemory} />
        <Button title="Limpar todas as memórias" onPress={clearMemories} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  memoryItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
});
