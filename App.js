import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      
      <View style={styles.buttonsContainer}>
      <TouchableHighlight style={styles.button} onPress={decrement} underlayColor="#DDDDDD">
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.button} onPress={increment} underlayColor="#DDDDDD">
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    margin: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
  },
});
