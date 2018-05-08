import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class BigCheckBox extends Component {
  render() {
    return (
          <View style={styles.customChk}>
            <Image
              source={require("../assets/plane-logo-outline.png")}
              style={{ width: 72, height: 72 }}
            />
            <View style={styles.cardTime}>
              <Text style={styles.checkBoxTitle}>Transportation</Text>
              <Text  style={styles.checkSubBoxTitle}>Fly / Train / Bus</Text>
            </View>
          </View>
    );
  }
}


const styles = StyleSheet.create({
  customChk: {
    height: 120,
    elevation: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 400,
    borderRadius: 6,
    padding: 24,
    marginTop: 10,
    marginBottom: 10
  },
  checkBoxTitle: {
    color: "#232322",
    fontSize: 20,
    fontFamily: "FiraSans",
    lineHeight: 27,
    fontWeight: "700"
  },
  checkSubBoxTitle:{
    color: "#5b5b5b",
      fontSize: 12,
      fontFamily: "FiraSans",
      lineHeight: 16
  }
});
