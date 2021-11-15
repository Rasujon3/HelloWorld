import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <Text>Hello Sujon</Text>
      <Text>Hello Sujon</Text>
      <Text>Hello Sujon</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column-reverse',
  },
  testStyle:{
    color: "green",
  }
});
