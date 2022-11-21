
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [frase, setFrase] = useState('Clique aqui e veja sua cor e sua frase para o dia de hoje.')
  const frases = [
    'Uma palavra grosseira, uma expressão bizarra, ensinou-me por vezes mais do que dez belas frases.',
    'As mais belas frases de amor são ditas no silêncio de um olhar.',
    'Disfarçamos nosso abandono com frases ousadas e sem verdade alguma. O que a gente gostaria de dizer, mesmo, é: me dê sua mão.'
  ]
  const [cor, setCores] = useState('')
  const cores = [
    'Vermelho',
    'Verde',
    'Azul'
  ]

  function trocaValores(){
    let aleatorio = Math.floor(Math.random() * cores.length)
    setCores(cores[aleatorio])
    setFrase(frases[aleatorio])
  }

  return (
    <View style={styles.container}>
      <Text>Horóscopo</Text>
      <TouchableOpacity
      onPress={ () => trocaValores()} 
      style={{margin:30, padding:30, backgroundColor:'pink',
      borderRadius:30,}}>

        <Text>{frase}</Text>
        <Text>Sua cor é: {cor}</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
