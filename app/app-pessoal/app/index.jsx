import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./components/wd.jpeg')}
        style={styles.foto}
      />
      <Text style={styles.title}>Bem-vindo(a) ao meu App</Text>
      <Text style={styles.subtitle}>Meu nome é Gabriel e aqui está um pouco da minha vida</Text>

      <Link href="./hobbies" style={styles.button}>
        Veja alguns dos meus hobbies
      </Link>
      
      <Link href="./viagens" style={styles.button}>
        Veja algumas de minhas Viagens
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    marginTop: 15,
    padding: 12,
    width: 200,
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
