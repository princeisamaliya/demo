import React, { Component } from 'react';
import {
  TextInput,
  ScrollView,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import Pagination from '../components/Pagination';
import AutocompleteCustom from '../components/Autocomplete';


class CreateTripStep extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#f8f9f8', elevation: 0 },
    headerTitleStyle: { color: '#444', fontSize: 18, paddingRight: 15 },
    title: 'Commercial conference at triporate',
    headerRight: (
      <Button
        title="EDIT TITLE"
        buttonStyle={{
          height: 18,
          width: 90,
          borderRadius: 0,
          backgroundColor: 'transparent',
          elevation: 0,
          flex: 1,
          marginLeft: 40,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 18, color: '#06a790' }}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepBody}>
          <Text style={styles.stepInfo}>STEP 1</Text>
          <Text style={styles.stepTitle}>Where are you travellingaaaaa?</Text>
          
          <AutocompleteCustom />
        </View>
        <Pagination />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9f8',
    justifyContent: 'center',
  },
  stepBody: {
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: '#f8f9f8',
    justifyContent: 'center',
  },
  stepInfo: {
    color: '#5b5b5b',
    fontSize: 12,
  },
  stepTitle: {
    fontSize: 42,
    color: '#232322',
    fontWeight: '600',
    marginBottom: 15,
  },
  stepInput: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 3,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    elevation: 0,
    marginBottom: 15,
  },
});

export default CreateTripStep;
