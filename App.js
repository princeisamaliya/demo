import React, { Component } from "react";
import { TextInput, ScrollView, View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";
import { Font } from "expo";
import { Button } from "react-native-elements";
import CardView from "./components/CardView";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";


class App extends Component {
  static navigationOptions = {
    headerTitle: (
     <Image source={require("./assets/nav-logo.png")}  style={{ height: 44, width: 240, marginBottom: 20, marginTop:20, marginLeft:10, }} />
    ),
  };
  state = {
    
  };
  _handlePress = () => {
    this.props.navigation.navigate("CreateTrip");
  };

  async componentDidMount() {
    await Font.loadAsync({
       FiraSans: require("./assets/fonts/FiraSans-Regular.otf"),
       FirasansCondensed: require("./assets/fonts/FirasansCondensed.ttf"),
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
                
               <CardView /><CardView /><CardView /><CardView /><CardView /><CardView />
               
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



class CreateTrip extends React.Component {
  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
  
  static navigationOptions = {
    headerStyle: {backgroundColor:'#f8f9f8', elevation:0, },
    headerTitleStyle: {color:'#444', fontSize:18, paddingRight:15 },
    title: 'Commercial conference Commercial conference Commercial conference ',
    headerRight: <Button title="EDIT TITLE"
      buttonStyle={{ height: 18, width:90, borderRadius: 0, backgroundColor:'transparent',  elevation:0, color:'#06a790', flex:1, marginLeft:40  }}
      titleStyle={{ fontWeight: "bold", fontSize: 18, color:'#06a790' }}
    />
  };
  
  render() {
    return (
       <ScrollView style={styles.stepBody}>
        <View>
            <Text style={styles.stepInfo}>STEP 1</Text>
            <Text style={styles.stepTitle}>Where are you travelling?</Text>
            <TextInput underlineColorAndroid='transparent' style={styles.stepInput} placeholder="From"/>
            <TextInput underlineColorAndroid='transparent' style={styles.stepInput} placeholder="To"/>
        </View>
      </ScrollView>
    );
  }
  
}


export default StackNavigator({
  Home: {
    screen: App,
  },
  CreateTrip: {
    screen: CreateTrip
  },
  initialRouteName: "Home"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  content: {
    backgroundColor:'#f8f9f8',
    paddingLeft: 18,
    paddingRight: 18,
    flex: 1
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  stepBody:{
    flex:1,
    justifyContent:'center',
    paddingLeft: 18,
    paddingRight: 18,
     backgroundColor:'#f8f9f8',
  },
  stepInfo:{
    color:'#5b5b5b',
    fontSize:12,
  },
  stepTitle:{
    fontSize:42,
    color:'#232322',
    fontWeight:'600',
    marginBottom:15
  },
  stepInput:{
    backgroundColor:'#fff',
    height:60,
    flex:1,
    borderRadius:3,
    paddingRight:10,
    paddingLeft:10,
    fontSize:18,
    elevation:0,
    marginBottom:15,
  }
});