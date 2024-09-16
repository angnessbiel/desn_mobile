import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default Seletor = () => {
  const [pokemon, setPokemon] = useState('');
  const [listaPokemons, setListaPokemons] = useState([]);
  const [pokemonsIniciais, setPokemonsIniciais] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [pokemonImage, setPokemonImage] = useState(null); // Novo estado para armazenar a imagem do Pokémon

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((dados) => setTipos(dados.results))
      .catch((error) => console.error('Erro ao buscar os tipos:', error));

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((dados) => {
        setListaPokemons(dados.results);
        setPokemonsIniciais(dados.results);
      })
      .catch((error) => console.error('Erro ao buscar os pokémons:', error));
  }, []);

  useEffect(() => {
    if (tipoSelecionado) {
      fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`)
        .then((response) => response.json())
        .then((dados) => {
          const pokemonsPorTipo = dados.pokemon.map((p) => p.pokemon.name);

          const pokemonsFiltrados = pokemonsIniciais.filter((pokemon) =>
            pokemonsPorTipo.includes(pokemon.name)
          );

          setListaPokemons(pokemonsFiltrados);
        })
        .catch((error) =>
          console.error('Erro ao buscar os pokémons por tipo:', error)
        );
    } else {
      setListaPokemons(pokemonsIniciais);
    }
  }, [tipoSelecionado, pokemonsIniciais]);

  // Efeito para buscar a imagem do Pokémon quando ele é selecionado
  useEffect(() => {
    if (pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((dados) => {
          setPokemonImage(dados.sprites.front_default); // Atualiza o estado com a URL da imagem
        })
        .catch((error) => console.error('Erro ao buscar detalhes do Pokémon:', error));
    }
  }, [pokemon]);

  const image = { uri: "https://wallpaper-house.com/data/out/7/wallpaper2you_147633.jpg" };

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione um Pokémon</Text>
        <Picker
          selectedValue={tipoSelecionado}
          onValueChange={(itemValue) => setTipoSelecionado(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label='Selecione um Tipo' value='' />
          {tipos.map((tipo, index) => (
            <Picker.Item key={index} label={tipo.name} value={tipo.name} />
          ))}
        </Picker>

        <Picker
          selectedValue={pokemon}
          onValueChange={(itemValue) => setPokemon(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label='Selecione um Pokémon' value='' />
          {listaPokemons.map((item, index) => (
            <Picker.Item key={index} label={item.name} value={item.name} />
          ))}
        </Picker>

        {pokemon ? <Text style={styles.selectedText}>Você selecionou {pokemon}</Text> : null}

        {/* Exibe a imagem do Pokémon selecionado */}
        {pokemonImage && (
          <Image
            source={{ uri: pokemonImage }}
            style={styles.pokemonImage}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    backgroundColor: '#f0f0f0', 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  pickerItem: {
    fontSize: 18,
    color: '#333',
  },
  selectedText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
});
