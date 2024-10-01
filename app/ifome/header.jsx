import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>iFome</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      padding: 10,
    },
    header: {
      backgroundColor: '#ff0000',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    item: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginVertical: 8,
      padding: 15,
      elevation: 3,
      flexDirection: 'row',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginRight: 15,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    local: {
      fontSize: 14,
      color: '#666',
    },
    price: {
      fontSize: 16,
      color: '#e91e63',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#ff5722',
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  

export default Header;