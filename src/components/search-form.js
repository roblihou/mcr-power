import React from 'react';
import { Text, View, TextInput, Picker, Button } from 'react-native';
import axios from 'axios';
import ResultsTable from './results-table';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      propertyType: 'none',
      savings: {
        halfCoverage: 6,
      },
      isHidden: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // console.log(this.state.propertyType);
    let endpoint = 'https://teamenergy-mcr.herokuapp.com/calculate/';
    endpoint += `${this.state.propertyType}/`;
    endpoint += this.state.searchInput;

    axios.get(endpoint)
      .then((response) => {
        console.log(response.data.savings);
        this.setState({
          savings: response.data.savings,
          isHidden: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width: 200, alignSelf: 'center'}}
          placeholder="Enter your postcode or city"
          onChangeText={(searchInput) => this.setState({searchInput})}
        />
        <Picker
          selectedValue={this.state.propertyType}
          style={{ height: 50, width: 200, alignSelf: 'center' }}
          onValueChange={(itemValue, itemIndex) => this.setState({propertyType: itemValue})}>
          <Picker.Item label="Select Property Type" value="none" />         
          <Picker.Item label="Small House" value="smallhouse" />
          <Picker.Item label="Medium House" value="normalhouse" />
          <Picker.Item label="Office" value="office" />
          <Picker.Item label="Warehouse" value="warehouse" />
        </Picker>
        <Button
          onPress={this.handleSubmit}
          title="Calculate Savings"
          color="#841584"
          accessibilityLabel="Calculate tour potential savings 2"
        />
        {!this.state.isHidden && <ResultsTable savings={this.state.savings}/>}
      </View>
    );
  }
}

export default SearchForm;
