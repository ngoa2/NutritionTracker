import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert, Modal, Button, TextInput } from "react-native";
import { Card, CardItem, Container, Body } from "native-base";
// import FlatList from 'flatlist-react';

import ProfileTargetCard from "../components/ProfileTargetCard";
import ProfileInformationCard from "../components/ProfileInformationCard";
import ProfileLogoutCard from "../components/ProfileLogoutCard";
import { TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
import ProfileModal from "../components/ProfileModal";
// import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

const ProfileScreen = () => {
  // @TODO: fix this array after database is plugged in
  // [target calories, target weight]
  let targets = [1850, 145];

  // @TODO: fix these two arrays after database is implemented
  let profileGeneral = [
    "Username",
    "Gender",
    "Age",
    "Weight",
    "Height",
    "Security",
  ];
  let profileIndividual = [
    "Jane Doe",
    "Female",
    "20",
    "155 lbs",
    "5 ft 7 in",
    "",
  ];
  let [index, setIndex] = useState(0);

  function mainContentGenerator(props) {
    setIndex(index + 1);
    return (
      <ProfileInformationCard
        profileInformation={[
          profileGeneral[index - 1],
          profileIndividual[index - 1],
        ]}
      />
    );
  }

  let [modalVisible, setModalVisible] = useState(false);
  let [displayIndex, setDisplayIndex] = useState(0);
  let [textModal, setTextModal] = useState('');

  const openModal = (index) => {
    setModalVisible(true);
    setDisplayIndex(index);
    setTextModal(profileIndividual[index]);
  }

  return (
    <Container>
      <View style={styles.background}>
        <View style={styles.screenContainer}>
          <Text style={styles.textTitle}>My Profile</Text>
          <View style={styles.bottomHalf}>
            <ProfileTargetCard targets={targets} />
            <Body style={styles.roundedBody}>

            <ScrollView style={styles.scroll}>
              {profileGeneral.map((profile, index) => (
                <TouchableOpacity activeOpacity={1} onPress={() => openModal(index)}>
                  <ProfileInformationCard general={profile} individual={profileIndividual[index]}/>
                </TouchableOpacity>

                
              ))}
            </ScrollView>

            <Modal visible={modalVisible} transparent={true}>
              <View style={{ flex: 1, backgroundColor: '#000000aa' }}>
              <View style={{ backgroundColor: '#ffffff', margin: 50, marginTop: '50%', padding: 40, paddingTop: 25, borderRadius: 30 }}>
              <Button color="orange" title='cancel' onPress={()=>setModalVisible(false)} />
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>{profileGeneral[displayIndex]}:</Text>
              <TextInput style={{ margin: 10, paddingLeft: 5, width: '86%', height: 17, borderBottomWidth: 1, borderBottomColor: 'gray' }} value={textModal} onChangeText={text=>setTextModal(text)} />
              <Button color="orange" title='confirm' onPress={()=>setModalVisible(false)} />
              </View>
              </View>
            </Modal>

              {/* </View> */}

              {/* <FlatList
                list={profileGeneral}
                renderItem={({item, index}) => (
                  <ProfileInformationCard general={item} individual={profileIndividual[index]} />
                )}

              />     */}
              <View style={{ marginBottom: 10 }} ></View>
              <ProfileLogoutCard text={'Log out'} onPress={() => Alert.alert('logging out')} />
              <View style={{ marginBottom: 100 }} ></View>
            </Body>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2CBA8D",
  },

  scroll: {
    height: "100%",
    width: "100%",
  }, 

  screenContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
  },

  textTitle: {
    marginTop: 65,
    marginLeft: 50,
    width: "100%",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    textAlign: "left",
  },

  bottomHalf: {
    position: "relative",
    top: 40,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#2CBA8D",
  },

  roundedBody: {
    position: "relative",
    top: -60,
    backgroundColor: "#F9F9F9",
    paddingTop: 100,
    borderRadius: 36,
    width: "100%",
  },

  modalButton: {
    borderRadius: 30,
  }, 
});

export default ProfileScreen;
