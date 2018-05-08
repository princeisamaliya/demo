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
import { Font } from "expo";
import { Button } from "react-native-elements";
import { TabNavigator, TabBarBottom } from "react-navigation";
import CardView from "./components/CardView";

class App extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("./assets/nav-logo.png")}
        style={{ height: 44, width: 240, marginBottom: 20, marginTop: 20, marginLeft: 10 }}
      />
    )
  };
  state = {};
  _handlePress = () => {
    this.props.navigation.navigate("CreateTrip");
  };

  async componentDidMount() {
    await Font.loadAsync({
      FiraSans: require("./assets/fonts/FiraSans-Regular.otf"),
      FirasansCondensed: require("./assets/fonts/FirasansCondensed.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            {
              <ScrollView style={styles.content}>
                <CardView />
                <CardView />
                <CardView />
                <CardView />
                <CardView />
                <CardView />

                <Button
                  onPress={this._handlePress}
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
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    backgroundColor: "#f8f9f8",
    paddingLeft: 18,
    paddingRight: 18,
    flex: 1
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
