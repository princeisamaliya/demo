import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, TextInput, Button, Text } from "react-native";
import { Constants } from "expo";
import { Font } from "expo";

export default class App extends Component {
  state = {
    inputValue: "",
    fontLoaded: false
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
  _password = password => {
    this.setState({ password });
  };
<<<<<<< HEAD
=======
  _handleButtonPress = () => {
    Alert.alert("Button pressed!", "You did it!");
  };
>>>>>>> parent of b9a276b... issue

  async componentDidMount() {
    await Font.loadAsync({
      FiraSans: require("./assets/fonts/FiraSans-Regular.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <View style={styles.navigation}>
            <Image source={require("./assets/logo-new.png")} style={{ height: 30, width: 158 }} />
          </View>
          <View style={{ flex: 1 }}>
<<<<<<< HEAD
            <ScrollView style={styles.content} >
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("./assets/logo-wide.png")} style={{  height: 50, width: 258,  marginBottom: 20, flex: 1 }} />
              </View>
              <TextInput
                placeholder="Please enter your name"
                underlineColorAndroid="transparent"
                value={this.state.inputValue}
                onChangeText={this._handleTextChange}
                style={styles.inputbox}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                underlineColorAndroid="transparent"
                value={this.state.password}
                onChangeText={this._password}
                style={styles.inputbox}
              />
              <Button
                color="#0ea992"
                title="LOGIN"
                style={styles.button}
              />
             
            </ScrollView>
=======
            <Text style={{ fontFamily: "FiraSans", fontSize: 56 }}>Hello, world!</Text>
            <Text style={{ fontFamily: "Arial", fontSize: 56 }}>Hello, world!</Text>
            {/* <ScrollView style={styles.content}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri:
                    "https://abrilexame.files.wordpress.com/2017/01/6259faa4-add5-4d70-ba5e-4f161ccb88b8.png"
                }}
                style={{ height: 50, width: 258, marginBottom: 20, flex: 1 }}
              />
            </View>
            <TextInput
              placeholder="Please enter your name"
              underlineColorAndroid="transparent"
              value={this.state.inputValue}
              onChangeText={this._handleTextChange}
              style={styles.inputbox}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              underlineColorAndroid="transparent"
              value={this.state.password}
              onChangeText={this._password}
              style={styles.inputbox}
            />
            <Button
              color="#0ea992"
              title="LOGIN"
              style={styles.button}
              onPress={this._handleButtonPress}
            />
          </ScrollView> */}
>>>>>>> parent of ce518a4... error
          </View>
        </View>
      );
    } else {
      return <Text>Loading - To be relaced by loader</Text>;
    }
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#0ea992",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
  navigation: {
    borderBottomWidth: 1,
    padding: 15,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 5
  },
  content: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    
  },
  inputbox: {
    height: 44,
    padding: 10,
    fontSize: 18,
    color: "#aaa",
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 0,
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
    borderRadius: 2,
    fontFamily: "FiraSans"
  },
  button: {
    color: "#ff0000",
    marginBottom:"20",
    height:"100",
  }
});
