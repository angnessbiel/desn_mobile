import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Hobbies() {
  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Link href="/app-pessoal/app" style={styles.backButton}>
          Voltar
        </Link>
        <Text style={styles.navTitle}>Meus Hobbies</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.item}>
          <Image
            source={{ uri: 'https://s3.amazonaws.com/smartsystem-prod/pictures/6662/big/smart_fit-academia-shopping_sao_jose-sao_jose_dos_pinhais-pr-area-peso-livre-musculacao.jpg?1564596814' }}
            style={styles.image}
          />
          <Text style={styles.text}>Academia</Text>
        </View>

        <View style={styles.item}>
          <Image
            source={{ uri: 'https://img.odcdn.com.br/wp-content/uploads/2022/07/Spotify.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Música</Text>
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
  },
});
