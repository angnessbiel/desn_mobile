import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Viagens() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Link href="app-pessoal/app" style={styles.backButton}>
          Voltar
        </Link>
        <Text style={styles.navTitle}>Minhas Viagens</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.text}>Porto Seguro - 2024</Text>
          <Image
            source={{ uri: 'https://edicarlostur.com.br/wp-content/uploads/2023/10/transfer-porto-seguro-trancoso-sofisticacao-e-luxo-edicarlostur.webp' }}
            style={styles.image}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>Gramado - 2018</Text>
          <Image
            source={{ uri: 'https://viladamonica.com.br/wp-content/uploads/2024/04/Gramado-Credito-Cleiton-Thiele-1024x683.jpg' }}
            style={styles.image}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.text}>Fortaleza - 2013</Text>
          <Image
            source={{ uri: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/praia-de-meireles-e1482425853260.jpg' }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    color: 'white',
    fontSize: 18,
    padding: 10,
    backgroundColor: '#2E7D32',
    borderRadius: 5,
    textAlign: 'center',
  },
  navTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 80, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
