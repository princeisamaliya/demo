import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text
} from "react-native";
import { Constants, Font } from "expo";
import { Button } from "react-native-elements";
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

  state = {
    inputValue: "",
    fontLoaded: false,
    email: '',
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
                <TextField
                  style={{flex:1, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#ddd', borderRadius:2, height:50, }}
                  label="Telefonica's Email"
                  labelFontSize="12"
                  textColor="#333"
                  underlineColorAndroid="transparent"
                  lineWidth="0"
                  activeLineWidth="0"
                  value={email}
                />
                {/* <Button color="#0ea992" title="LOGIN" style={styles.button} /> */}

                <Button 
                  title="Sign in"
                   icon={
                    <Icon
                      name='arrow-right'
                      size={15}
                      color='white'
                    />
                  }
                  buttonStyle={{ height: 42, borderRadius: 4 }}
                  textStyle={{ fontWeight: 'bold', fontSize: 23 }}
                  ViewComponent={require("expo").LinearGradient}
                  linearGradientProps={{
                    colors: ["#77c7ad", "#06a790"],
                    start: [1, 0],
                    end: [0.2, 0]
                  }}
                />

                <View style={styles.cardstyle}>
                  <View style={styles.cardWall}>
                    <Image source={require("./assets/wall.png")} style={{ flex: 1 }} />
                    <View style={styles.cardWallInfo}>
                      <View style={styles.cardWallLeft}>
                        <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>
                          FROM
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 24,
                            fontFamily: "FiraSans",
                            marginBottom: 2,
                            textShadowColor: "#404040",
                            textShadowOffset: { width: 0, height: 1 },
                            textShadowRadius: 2
                          }}
                        >
                          Madrid
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>
                          COUNTRY
                        </Text>
                      </View>
                      <View style={styles.cardWallIcon}>
                        <Image
                          source={require("./assets/fly.png")}
                          style={{ height: 45, width: 45 }}
                        />
                      </View>
                      <View style={styles.cardWallRight}>
                        <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>
                          TO
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 24,
                            fontFamily: "FiraSans",
                            marginBottom: 2,
                            textShadowColor: "#404040",
                            textShadowOffset: { width: 0, height: 1 },
                            textShadowRadius: 2
                          }}
                        >
                          Zaragoza
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>
                          ESPAÑA
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={{ color: "#5a5a5a", fontSize: 10, fontFamily: "FiraSans" }}>
                        #12004
                      </Text>
                      <Text
                        style={{
                          color: "#5a5a5a",
                          fontSize: 18,
                          fontFamily: "FiraSans",
                          marginBottom: 2,
                          fontWeight: "700"
                        }}
                      >
                        Conferencia de comerciales en la sede de Zaragoza
                      </Text>
                      <Text style={styles.cardStatus}>Pending</Text>
                      <View style={styles.cardFooter}>
                        <View style={styles.cardTime}>
                          <Text
                            style={{
                              color: "#5b5b5b",
                              fontSize: 10,
                              fontFamily: "FiraSans",
                              lineHeight: 16
                            }}
                          >
                            DEPARTURE
                          </Text>
                          <Text
                            style={{
                              color: "#232322",
                              fontSize: 24,
                              fontFamily: "FirasansCondensed",
                              lineHeight: 27
                            }}
                          >
                            Fri, 13
                          </Text>
                        </View>
                        <View style={styles.cardTime}>
                          <Text
                            style={{
                              color: "#5b5b5b",
                              fontSize: 10,
                              fontFamily: "FiraSans",
                              lineHeight: 16
                            }}
                          >
                            RETURN
                          </Text>
                          <Text
                            style={{
                              color: "#232322",
                              fontSize: 24,
                              fontFamily: "FirasansCondensed",
                              lineHeight: 27
                            }}
                          >
                            Mon, 16
                          </Text>
                        </View>
                        <View style={styles.cardUser}>
                          <View style={styles.userImg}>
                            <Image
                              source={require("./assets/user.jpg")}
                              style={{ height: 45, width: 45, borderRadius: 42, flex: 1 }}
                            />
                          </View>
                          <View style={styles.userImg}>
                            <Image
                              source={require("./assets/user.jpg")}
                              style={{ height: 45, width: 45, borderRadius: 42, flex: 1 }}
                            />
                          </View>
                          <View style={styles.userImg}>
                            <Text
                              style={{
                                color: "#fff",
                                fontSize: 18,
                                fontFamily: "FiraSans",
                                fontWeight: "700",
                                lineHeight: 50,
                                textAlign: "center"
                              }}
                            >
                              +5
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.customChk}>
                  <Image
                    source={require("./assets/plane-logo-outline.png")}
                    style={{ width: 72, height: 72 }}
                  />
                  <View style={styles.cardTime}>
                    <Text
                      style={{
                        color: "#232322",
                        fontSize: 20,
                        fontFamily: "FiraSans",
                        lineHeight: 27,
                        fontWeight: "700"
                      }}
                    >
                      Transportation
                    </Text>
                    <Text
                      style={{
                        color: "#5b5b5b",
                        fontSize: 12,
                        fontFamily: "FiraSans",
                        lineHeight: 16
                      }}
                    >
                      Fly / Train / Bus
                    </Text>
                  </View>
                </View>
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
  },
  cardstyle: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
    elevation: 3,
    overflow: "hidden"
  },
  cardWall: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    borderRadius: 2
  },
  cardWallInfo: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cardWallLeft: {
    flex: 1,
    paddingLeft: 22,
    paddingTop: 18,
    paddingBottom: 18
  },
  cardWallRight: {
    flex: 1,
    paddingRight: 22,
    paddingLeft: 64,
    paddingTop: 18,
    paddingBottom: 18
  },
  cardWallIcon: {
    flex: 1,
    borderRadius: 42,
    position: "absolute",
    zIndex: 2
  },
  cardBody: {
    backgroundColor: "#fff",
    paddingLeft: 22,
    paddingTop: 18,
    paddingRight: 22,
    paddingBottom: 18,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#eee"
  },
  cardStatus: {
    padding: 2,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 3,
    fontSize: 10,
    backgroundColor: "#219bf4",
    borderRadius: 10,
    color: "#fff",
    width: 85,
    marginTop: 10
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  cardTime: {
    flex: 1
  },
  cardUser: {
    position: "relative",
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  userImg: {
    marginLeft: -5,
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: "#402670"
  },
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
  button: {
     fontFamily: "FiraSans",
     fontSize:45,
  }
});
