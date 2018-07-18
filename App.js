import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/components/search-form';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MCR Energy</Text>
        <Text>Version 2</Text>
        <SearchForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
