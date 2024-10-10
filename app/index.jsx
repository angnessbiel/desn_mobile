import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Atividades 2024</Text>
            <Link href="/banco/banco" style={styles.link}>• Banco</Link>
            <Link href="/calculadora/calculadora" style={styles.link}>• Calculadora</Link>
            <Link href="/calculadora2/calculadora2" style={styles.link}>• Calculadora 2</Link>
            <Link href="/listaPokemon/listaPokemon" style={styles.link}>• Pokémon</Link>
            <Link href="/listaTarefa/listaTarefa" style={styles.link}>• Lista</Link>
            <Link href="/telaLogin" style={styles.link}>• Login</Link>
            <Link href="/app-pessoal" style={styles.link}>• Sobre Mim</Link>
            <Link href="/ifome" style={styles.link}>• Ifome</Link>
            <Link href="/camera" style={styles.link}>• Camera</Link>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        
    },
    link: {
        fontSize: 18,
        margin: 8,
        color: 'black',
       
    },
    box:{
        shadowOpacity: 0.25,  
        shadowRadius: 8.84, 
       padding: 50,
       borderRadius:15   
    },
    titulo:{
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    }
});