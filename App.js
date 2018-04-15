import React, { Component } from 'react';
import { ScrollView , View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { Font } from 'expo';

export default class App extends Component {
  state = {
    inputValue: ""
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
   _password = password => {
    this.setState({ password });
  };
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };
 componentDidMount() {
    Font.loadAsync({
      'FiraSans': require('./assets/fonts/FiraSans-Regular.otf'),
    });
  }


  render() {
    return (
      <View style={styles.container}>   
       <View style={styles.statusBar} />  
        <View style={styles.navigation}>  
          <Image  source={{ uri: 'https://res.cloudinary.com/chalo/image/upload/v1508925122/brand-triporate-horizontal-rgb-150dpi_1_iovvyd.png' }} style={{ height: 30, width: 158, }} />
        </View>
          <View style={{flex: 1,}}> 
            <ScrollView style={styles.content}>
             <View style={{flex: 1,justifyContent: 'center', alignItems: 'center',}}> 
              <Image  source={{ uri: 'https://abrilexame.files.wordpress.com/2017/01/6259faa4-add5-4d70-ba5e-4f161ccb88b8.png' }} style={{ height: 50, width: 258, marginBottom:20,flex: 1 }} />
             </View>
                <TextInput placeholder="Please enter your name" underlineColorAndroid="transparent" value={this.state.inputValue}  onChangeText={this._handleTextChange} style={styles.inputbox}  />
                  <TextInput secureTextEntry={true} placeholder="Password" underlineColorAndroid="transparent" value={this.state.password}  onChangeText={this._password} style={styles.inputbox}  />
                <Button color='#0ea992' title="LOGIN" style={styles.button} onPress={this._handleButtonPress}  />
            </ScrollView>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
   statusBar: {
    backgroundColor: "#0ea992",
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
  navigation: {
    borderBottomWidth:1,
    padding:15,
    borderColor: '#ddd',
    backgroundColor: "#fff",
    marginBottom:5,
    
  },
  content: {
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    flex: 1,
    justifyContent: 'center',
  },
  inputbox:{
    height: 44, 
    padding: 10,
    fontSize:18,
    color:'#aaa', 
    borderColor: '#ddd',  
    borderWidth:1,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 0,
    backgroundColor: "#f5f5f5",
    marginBottom:20,
    borderRadius:2,
    fontFamily: 'FiraSans'
    
  },
  button: {
    color: '#ff0000',
  }
});