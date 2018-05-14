import React, { Component, TouchableOpacity } from "react";
import Autocomplete from 'react-native-autocomplete-input';
import {
  TextInput,
  ScrollView,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  Dimensions 
} from "react-native";
import { Button } from "react-native-elements";

class AutocompleteCustom extends React.Component {
  render() {
     return(
       <ScrollView>
        <View style={styles.autocompleteContainer}>
          <Autocomplete />
        </View>
        <View>
          <Text>Some content</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});

export default AutocompleteCustom;
