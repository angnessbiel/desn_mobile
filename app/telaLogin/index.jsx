import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    all:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:'apple-system',
    },
    box:{
        shadowOpacity: 0.25,  
        shadowRadius: 8.84, 
        padding: 30,
        marginBottom: 6,
       },
    text:{
        textAlign:'center',
        marginBottom: 40,
        fontWeight:'bold',
        fontSize: 26,
    },
    input:{
        color:'gray',
        padding: 5,
        width:'300px',
        margin:'auto',
        marginBottom: 20,
        textAlign: 'center',
        borderColor: 'string',
        borderRadius: 10,
        backgroundColor: '#FFF',
        fontSize: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0.3, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,

    },

    div:{
        alignItems:'center',
        textAlign:'center'

    },
    button:{
        width:'100px',
        padding: 10,
        backgroundColor:'#333',
        color:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderRadius: 4,
    },
    buttontxt:{
        color:'white',
        textAlign:'center',
        fontSize: 18,
    }

})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    
    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}
    return(
        <SafeAreaView style={styles.all}>
            <View style={styles.box}>
            <View>
                <Text style={styles.text}>Registre-se</Text>
            </View>
            <View style={styles.div}>
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setEmail(text)}
                    value={email}
                    placeholder='Insira seu Email'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setNome(text)}
                    value={nome}
                    placeholder='Insira seu Nome'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setSenha(text)}
                    value={senha}
                    placeholder='Insira sua Senha'
                    secureTextEntry={true}
                />
                
            </View>
            </View>
            <View>
                <Pressable onPress={registrarUsuario} style={styles.button}>
                    <Text style={styles.buttontxt}>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}   