import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Container, Body } from "native-base";
import AchievementCard from "../components/AchievementCard";

const AchievementScreen = () => {
  return (
    <Container>
      <View style={styles.background}>
        <Text style={styles.textTitle}>Achievements</Text>
        <View style={styles.bottomHalf}>
          <Body style={styles.roundedBody}>
            <Text style={styles.textHeading}>Completed</Text>
            {/* <View style={styles.scrollbar}> */}
            <ScrollView style={styles.scrollbar} horizontal={true} showsHorizontalScrollIndicator={false}>
              <AchievementCard></AchievementCard>
              <AchievementCard></AchievementCard>
              <AchievementCard></AchievementCard>
              <AchievementCard></AchievementCard>
            </ScrollView>

            {/* </View> */}
            <Text style={styles.textHeading}>Locked</Text>
            <ScrollView style={styles.scrollbar} horizontal={true} showsHorizontalScrollIndicator={false}>
              <AchievementCard style={{color: 'grey'}}></AchievementCard>
              <AchievementCard></AchievementCard>
              <AchievementCard></AchievementCard>
              <AchievementCard></AchievementCard>
            </ScrollView>
          </Body>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollbar: {
    marginLeft: 37,
    marginTop: 10,
    // width: '100%',
    height: '40%',
    // backgroundColor: 'black',
    flexDirection: 'row',
    // flex: 1,
  }, 

  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2CBA8D",
  },

  bottomHalf: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "relative",
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 8,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
  },

  textHeading: {
    fontSize: 20,
    marginLeft: 37,
    marginTop: 20,
    fontWeight: "bold",
  },

  textTitle: {
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    marginTop: 68,
    marginLeft: 37,
    marginBottom: 50,
  },
});

export default AchievementScreen;
