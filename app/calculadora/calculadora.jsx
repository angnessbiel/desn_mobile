import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const App = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          res = num1 / num2;
        } else {
          res = 'Cannot divide by zero';
        }
        break;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstValue}
        value={firstValue}
        placeholder="Primeiro valor"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSecondValue}
        value={secondValue}
        placeholder="Segundo valor"
        keyboardType="numeric"
      />
      <Button
        title="Somar"
        onPress={() => handleCalculation('add')}
      />
      <Button
        title="Subtrair"
        onPress={() => handleCalculation('subtract')}
      />
      <Button
        title="Multiplicar"
        onPress={() => handleCalculation('multiply')}
      />
      <Button
        title="Dividir"
        onPress={() => handleCalculation('divide')}
      />
      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
 