import React from 'react';
import { Modal, TouchableHighlight, Text, View, TextInput, Picker, Button } from 'react-native';
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarterCoverage: this.props.savings.quarterCoverage,
      halfCoverage: this.props.savings.halfCoverage,
      fullCoverage: this.props.savings.fullCoverage,
    };
    this.handleEnquiry = this.handleEnquiry.bind(this);
  }

  handleEnquiry() {
    console.log('ENQUIRY');
  }

  render() {
    return (
      <View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={['Coverage', 'Saving']}/>
          <Row data={['25%', `£${(Math.round(this.state.quarterCoverage * 100) / 100)}`]}/>
          <Row data={['50%', `£${(Math.round(this.state.halfCoverage * 100) / 100)}`]}/>
          <Row data={['100%', `£${(Math.round(this.state.fullCoverage * 100) / 100)}`]}/>
        </Table>
        <Button
          onPress={this.handleEnquiry}
          title="Enquire"
          color="#841584"
          accessibilityLabel="Make an enquiry"
        />
      </View>
    );
  }
}



export default ResultsTable;
