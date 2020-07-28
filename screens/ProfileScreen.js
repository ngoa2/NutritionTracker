import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Container, Body } from "native-base";

import ProfileTargetCard from '../components/ProfileTargetCard';
import ProfileInformationCard from '../components/ProfileInformationCard';
import ProfileLogoutCard from '../components/ProfileLogoutCard';

const ProfileScreen = () => {
  return (
    <Container>
      <View style={styles.background}>
        <View style={styles.screenContainer}>
          <Text style={styles.textTitle}>My Profile</Text>
          <View style={styles.bottomHalf}>
            <ProfileTargetCard />
            <Body style={styles.roundedBody}>
              <ProfileInformationCard />
              <ProfileInformationCard />
              <ProfileInformationCard />
              <ProfileInformationCard />
              <ProfileLogoutCard />
            </Body>
          </View>
        </View>
      </View>
    </Container>

  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  background: {
    flex: 1,
    backgroundColor: "#2CBA8D",
  },

  screenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: 'absolute',
    // padding: 25,
    // marginTop: 80,
  },
  
  textTitle: {
    marginTop: 65,
    marginLeft: 50,
    width: '100%',
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    textAlign: 'left',
  },

  bottomHalf: {
    position: 'relative',
    top: 40,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    backgroundColor: "#2CBA8D",
  },

  roundedBody: {
    position: 'relative',
    top: -60,
    backgroundColor: "#F9F9F9",
    paddingTop: 100,
    borderRadius: 36,
    width: '100%',

  },


});

export default ProfileScreen;
