import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, TextInput, Button, ActivityIndicator, Text } from "react-native";
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


  async componentDidMount() {
    await Font.loadAsync({
      FiraSans: require("./assets/fonts/FiraSans-Regular.otf")
    });
    await Font.loadAsync({
      IconMoon: require("./assets/fonts/icomoon.ttf")
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
            { <ScrollView style={styles.content}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("./assets/logo-wide.png")} style={{  height: 90, width: 258,  marginBottom: 20, flex: 1 }} />
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

              <View style={styles.cardstyle}>
                <View style={styles.cardWall}>
                  <Image source={require("./assets/wall.png")} style={{  flex: 1 }} />
                  <View style={styles.cardWallInfo}>
                    <View style={styles.cardWallLeft}>
                      <Text style={{color:'#fff', fontSize:12, fontFamily:'FiraSans',  }}>FROM</Text>
                      <Text style={{color:'#fff', fontSize:24, fontFamily:'FiraSans', marginBottom:2 }}>Madrid</Text>
                      <Text style={{color:'#fff', fontSize:12, fontFamily:'FiraSans', }}>COUNTRY</Text>
                    </View>
                    <View style={styles.cardWallIcon}>
                     <Image source={require("./assets/fly.png")} style={{  height: 45, width:45, }} />
                    </View>
                    <View style={styles.cardWallRight}>
                      <Text style={{color:'#fff', fontSize:12, fontFamily:'FiraSans',  }}>TO</Text>
                      <Text style={{color:'#fff', fontSize:24, fontFamily:'FiraSans', marginBottom:2 }}>Zaragoza</Text>
                      <Text style={{color:'#fff', fontSize:12, fontFamily:'FiraSans', }}>ESPAÑA</Text>
                    </View>
                  </View>
                  <View style={styles.cardBody}>
                      <Text style={{color:'#5a5a5a', fontSize:10, fontFamily:'FiraSans'}}>#12004</Text>
                      <Text style={{color:'#5a5a5a', fontSize:18, fontFamily:'FiraSans', marginBottom:2, fontWeight:'700',}}>Conferencia de comerciales en la sede de Zaragoza</Text>
                      <Text style={styles.cardStatus}>Pending</Text>
                  </View>
                </View>
                
              </View>
              
            </ScrollView> }
          </View>

        </View>
      );
    } else {
      return  <ActivityIndicator style={styles.loader} size="large" />;
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
  },
  button: {
    color: "#ff0000"
  },
  loader: {
    flex:1,
    justifyContent:'center',
  },
  cardstyle: {
    backgroundColor:'#fff',
    marginTop:10,
    marginBottom:10,
    borderRadius:6,
    elevation:2,
  },
  cardWall:{
    flex:1,
    justifyContent:'center',
    position:'relative', 
    borderRadius:2
  },
  cardWallInfo: {
    position:'absolute',
    top:0,
    left:0,
    zIndex:2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWallLeft: {
    flex: 1,
    paddingLeft:22,
    paddingTop:18,
    paddingBottom:18,
  },
  cardWallRight: {
    flex: 1, 
    paddingRight:22,
    paddingLeft:64,
    paddingTop:18,
    paddingBottom:18,
  },
  cardWallIcon: {
    flex: 1, 
    borderRadius:42,
    position:'absolute',
    zIndex:2,
  },
  cardBody: {
    backgroundColor:'#fff',
    paddingLeft:22,
    paddingTop:18,
    paddingRight:22,
    paddingBottom:18,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#eee',
  },
  cardStatus: {
    padding:2,
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:3,
    fontSize:10,
    backgroundColor:'#219bf4',
    borderRadius:10,
    color:'#fff',
    marginTop:5,
    width:85,
  }
});
