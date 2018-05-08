import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class CardView extends Component {
  render() {
    return (
      <View style={styles.cardstyle}>
        <View style={styles.cardWall}>
          <Image source={require("../assets/wall.png")} style={{ flex: 1 }} />
          <View style={styles.cardWallInfo}>
            <View style={styles.cardWallLeft}>
              <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>FROM</Text>
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
              <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>COUNTRY</Text>
            </View>
            <View style={styles.cardWallIcon}>
              <Image source={require("../assets/fly.png")} style={{ height: 45, width: 45 }} />
            </View>
            <View style={styles.cardWallRight}>
              <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>TO</Text>
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
              <Text style={{ color: "#fff", fontSize: 12, fontFamily: "FiraSans" }}>ESPAÑA</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={{ color: "#5a5a5a", fontSize: 10, fontFamily: "FiraSans" }}>#12004</Text>
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
                  <Image source={require("../assets/user.jpg")} style={styles.userImgIcon} />
                </View>
                <View style={styles.userImg}>
                  <Image source={require("../assets/user.jpg")} style={styles.userImgIcon} />
                </View>

                <View style={styles.userImg}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontFamily: "FiraSans",
                      fontWeight: "700",
                      lineHeight: 50,
                      textAlign: "center",
                      flex: 1
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
    );
  }
}

const styles = StyleSheet.create({
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
  userImgIcon: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    flex: 1
  },
  userImg: {
    height: 45,
    width: 45,
    backgroundColor: "#402673",
    borderRadius: 22.5,
    marginLeft: -5
  }
});
