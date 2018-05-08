import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text
} from "react-native";
import { Button } from "react-native-elements";

class CreateTrip extends React.Component {
  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };

  static navigationOptions = {
    headerStyle: { backgroundColor: "#f8f9f8", elevation: 0 },
    headerTitleStyle: { color: "#444", fontSize: 18, paddingRight: 15 },
    title: "Create",
    headerRight: (
      <Button
        title="EDIT TITLE"
        buttonStyle={{
          height: 18,
          width: 90,
          borderRadius: 0,
          backgroundColor: "transparent",
          elevation: 0,
          flex: 1,
          marginLeft: 40
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#06a790" }}
      />
    )
  };

  render() {
    return (
      <ScrollView style={styles.stepBody}>
        <View style={styles.container}>
          <Text style={styles.stepInfo}>STEP 1</Text>
          <Text style={styles.stepTitle}>Where are you travelling?</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.stepInput}
            placeholder="From"
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.stepInput}
            placeholder="To"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  stepBody: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: "#f8f9f8"
  },
  stepInfo: {
    color: "#5b5b5b",
    fontSize: 12
  },
  stepTitle: {
    fontSize: 42,
    color: "#232322",
    fontWeight: "600",
    marginBottom: 15
  },
  stepInput: {
    backgroundColor: "#fff",
    height: 60,
    flex: 1,
    borderRadius: 3,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    elevation: 0,
    marginBottom: 15
  }
});

export default CreateTrip;
