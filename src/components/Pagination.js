import React, { Component } from "react";
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

class Pagination extends React.Component {
  render() {
    return (
        <View style={styles.pagination}>
          <Button
            title="PREVIOUS"
            buttonStyle={{
              height: 20,
              borderRadius: 6,
              padding: 6,
              width:100,
              backgroundColor: "transparent",
              marginLeft: 3,
              marginRight: 3,
              elevation: 0
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#06a790", textAlign:'left'  }}
          />
          <View  style={styles.paginationButton}>
            <Button
              buttonStyle={{
                height: 12,
                width: 12,
                borderRadius: 6,
                padding: 6,
                backgroundColor: "#06a790",
                marginLeft: 3,
                marginRight: 3,
                elevation: 0
              }}
            />
            <Button
              buttonStyle={{
                height: 12,
                width: 12,
                borderRadius: 6,
                padding: 6,
                backgroundColor: "#d3d9da",
                marginLeft: 3,
                marginRight: 3,
                elevation: 0
              }}
            />
            <Button
              buttonStyle={{
                height: 12,
                width: 12,
                borderRadius: 6,
                padding: 6,
                backgroundColor: "#d3d9da",
                marginLeft: 3,
                marginRight: 3,
                elevation: 0
              }}
            />
            <Button
              buttonStyle={{
                height: 12,
                width: 12,
                borderRadius: 6,
                padding: 6,
                backgroundColor: "#d3d9da",
                marginLeft: 3,
                marginRight: 3,
                elevation: 0
              }}
            />
            <Button
              buttonStyle={{
                height: 12,
                width: 12,
                borderRadius: 6,
                padding: 6,
                backgroundColor: "#d3d9da",
                marginLeft: 3,
                marginRight: 3,
                elevation: 0
              }}
            />
          </View>
          <Button
            title="NEXT"
            buttonStyle={{
              height: 20,
              borderRadius: 6,
              padding: 6,
              width:100,
              backgroundColor: "transparents",
              marginLeft: 3,
              marginRight: 3,
              elevation: 0,            
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 16, color: "#06a790", textAlign:'right' }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  pagination: {
    position: "absolute",
    bottom: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    width: Dimensions.get('window').width,
  },
  paginationButton: {
    flex: 1, 
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  }
});

export default Pagination;
