import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image } from 'react-native';
import SearchForm from './src/components/search-form';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 250, height: 200}}
          source={require('./react-native/img/final-logo.png')}
        />
        <Text style={styles.titleText}>G.E.Power</Text>
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
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default App;
