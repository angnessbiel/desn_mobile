import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tasks = [
  { id: '1', title: 'Batata', completed: true },
  { id: '2', title: 'Arroz', completed: false },
  { id: '3', title: 'Leite', completed: true },
  { id: '4', title: 'Banana', completed: false },
];

const TaskItem = ({ title, completed }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemText, completed && styles.completedText]}>
        {title}
      </Text>
    </View>
  );
};

const TaskList = () => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskItem {...item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <TaskList />
    </View>
  );
}