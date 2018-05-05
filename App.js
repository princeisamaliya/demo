import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import { Constants, Font } from "expo";
import { Button } from "react-native-elements";
import { TextField } from "react-native-material-textfield";
import Icon from "react-native-vector-icons/FontAwesome";
import CardView from "./components/CardView";
import CheckBox from "./components/CheckBox";
import { StackNavigator } from "react-navigation";

class App extends Component {
  state = {
    inputValue: "",
    fontLoaded: false,
    email: ""
  };

  _handlePress = () => {
    this.props.navigation.navigate("Details");
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _password = password => {
    this.setState({ password });
  };

  async componentDidMount() {
    await Font.loadAsync({
      FiraSans: require("./assets/fonts/FiraSans-Regular.otf")
    });
    await Font.loadAsync({
      FirasansCondensed: require("./assets/fonts/FirasansCondensed.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    let { email } = this.state;
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <View style={styles.navigation}>
            <Image source={require("./assets/logo-new.png")} style={{ height: 30, width: 158 }} />
          </View>

          <View style={{ flex: 1 }}>
            {
              <ScrollView style={styles.content}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Image
                    source={require("./assets/logo-wide.png")}
                    style={{ height: 90, width: 258, marginBottom: 20, flex: 1 }}
                  />
                </View>

                <Button
                  onPress={this._handlePress}
                  iconRight={{ name: "code" }}
                  title="Sign in"
                  buttonStyle={{ height: 42, borderRadius: 4 }}
                  textStyle={{ fontWeight: "bold", fontSize: 23 }}
                  ViewComponent={require("expo").LinearGradient}
                  linearGradientProps={{
                    colors: ["#77c7ad", "#06a790"],
                    start: [1, 0],
                    end: [0.2, 0]
                  }}
                />

                <CardView />
                <CheckBox />
              </ScrollView>
            }
          </View>
        </View>
      );
    } else {
      return <ActivityIndicator style={styles.loader} size="large" />;
    }
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#fff",
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
    paddingLeft: 18,
    paddingRight: 18,
    flex: 1
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  }
});

class DetailsScreen extends React.Component {
  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          onPress={this._handlePress}
          iconRight={{ name: "code" }}
          title="Back"
          buttonStyle={{ height: 42, borderRadius: 4 }}
          textStyle={{ fontWeight: "bold", fontSize: 23 }}
          ViewComponent={require("expo").LinearGradient}
          linearGradientProps={{
            colors: ["#77c7ad", "#06a790"],
            start: [1, 0],
            end: [0.2, 0]
          }}
        />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: App
  },
  Details: {
    screen: DetailsScreen
  },
  initialRouteName: "Home"
});
