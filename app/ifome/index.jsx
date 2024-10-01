import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Header from './components/header';
import { AppContext } from '../../scripts/AppContext';
import { useContext } from 'react';
import { Link } from 'expo-router';

const Item = ({ id, name, local, price, img }) => {
    const { setCarrinho, carrinho } = useContext(AppContext)
    return (
        <View style={style.itens}>
            <Image
                style={style.img}
                source={{
                    uri: img,
                }}
            />
            <View style={style.info}>
                <Text style={style.name}>{name}</Text>
                <Text style={style.local}>{local}</Text>
                <Text style={style.price}>R${price}</Text>
                <Pressable onPress={() => setCarrinho([...carrinho, { id, name, local, price }])}>
                    <Text style={style.butt}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default conteudo = () => {
    const { lanches, carrinho } = useContext(AppContext)
    return (
        <ScrollView style={style.View}>
            <Header />
            <View style={style.carrinho}>
            <Image style={style.carr} source={require('../../assets/images/cart.png')} />
                   <Text style={style.text}>{carrinho.length} itens</Text>
                   {
                       carrinho.length > 0 &&
                       <Link href="../ifome/cart" >
                           <Text style={style.compra}>Finalizar compra</Text>
                       </Link>
                   }
               </View>
            <SafeAreaView style={style.container}>
                <FlatList
                    data={lanches}
                    renderItem={({ item }) => <Item name={item.name} local={item.local} price={item.price} img={item.img} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    itens: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 15,
    },
    img: {
        width: 250,
        height: 110,
    },
    info: {
       marginLeft: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    local: {
        fontSize: 13,
        color: 'gray',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    butt: {
        fontSize: 16,
        color: 'red',
    },
    carr: {
        height:30,
        width:30,
    },
    carrinho: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        marginBottom: 10,
        gap: 10,
        justifyContent: 'right'
    },
    text:{
        color: 'red'
    },
    compra: {
        color: 'red'
    }
})