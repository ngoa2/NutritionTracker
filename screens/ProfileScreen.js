import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Container, Body } from "native-base";
// import FlatList from 'flatlist-react';

import ProfileTargetCard from '../components/ProfileTargetCard';
import ProfileInformationCard from '../components/ProfileInformationCard';
import ProfileLogoutCard from '../components/ProfileLogoutCard';
// import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

const ProfileScreen = () => {

  // @TODO: fix this array after database is plugged in
  // [target calories, target weight]
  let targets = [1850, 145]

  // @TODO: fix these two arrays after database is implemented
  let profileGeneral = ['Username', 'Gender', 'Age', 'Weight', 'Height', 'Security']
  let profileIndividual = ['Jane Doe', 'Female', '20', '155 lbs', '5 ft 7 in', '']
  let [index, setIndex] = useState(0)

  function mainContentGenerator(props) {
    setIndex(index + 1)
    return <ProfileInformationCard profileInformation={[profileGeneral[index - 1], profileIndividual[index - 1]]} />
  }

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Profile TEST</Text>
    </View>
=======
    <Container>
      <View style={styles.background}>
        <View style={styles.screenContainer}>
          <Text style={styles.textTitle}>My Profile</Text>
          <View style={styles.bottomHalf}>
            <ProfileTargetCard targets={targets} />
            <Body style={styles.roundedBody}>
              {/* <View> */}
                {profileGeneral.map((profile, index) => (
                  <ProfileInformationCard general={profile} individual={profileIndividual[index]} />
                ))}

              {/* </View> */}

              {/* <FlatList
                list={profileGeneral}
                renderItem={({item, index}) => (
                  <ProfileInformationCard general={item} individual={profileIndividual[index]} />
                )}

              />     */}
              <ProfileLogoutCard />
            </Body>
          </View>
        </View>
      </View>
    </Container>

>>>>>>> 8d77a69e2be9dbcbf2b1e7cdc3c8056b826bb507
  );
};

const styles = StyleSheet.create({
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
