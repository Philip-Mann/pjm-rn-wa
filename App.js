import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetLocation from './components/GetLocation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PJM Weather App™ 2022</Text>
      <GetLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
