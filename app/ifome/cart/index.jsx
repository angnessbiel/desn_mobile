import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, FlatList } from 'react-native';
import { AppContext } from '../../../scripts/AppContext';
import Header from '../components/header';

const Item = ({ id, name, local, price, image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.local}>{local}</Text>
            </View>
            <View>
                <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
            </View>
        </View>
    );
};

export default function Carrinho() {
    const { carrinho } = useContext(AppContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = carrinho.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalPrice);
    }, [carrinho]);
    
    return (
        <ScrollView>
            <Header />
            <FlatList
                data={carrinho}
                renderItem={({ item }) => (
                 <Item 
                    name={item.name}
                    local={item.local}
                    price={item.price}
                    id={item.id}
                    image={item.img}
                     />
                 )}             
                keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
            />

            <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
            <Pressable>
                <Text style={styles.compra}>Finalizar compra</Text>
            </Pressable>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
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
    total: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    compra: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
