import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import DashboardCard from "../components/DashboardCard";
import { Container, Body } from "native-base";
import ProgressCircle from "react-native-progress-circle";
import SearchScreen from "./SearchScreen";
import { NavigationContainer } from '@react-navigation/native';


export default function DashboardScreen({ navigation }) {
  let [items, setItems] = useState({
    'breakfast': { time: '9am', calories: 210 },
    'lunch': { time: '12pm', calories: 500},
    'dinner': { time: '7pm', calories: 430}
  })

  let [totalIntakeGoal, setTotalIntakeGoal] = useState(1840)

  let [totalIntake, setTotalIntake] = useState(0)

  function sumCalorieIntake(props) {
    let sum = 0
    items.map((item, index) => {
      sum += item.calories
    })
    setTotalIntake(sum)
  }

    return (
      <Container style={styles.background}>
        <Text style={styles.textTitle}>Daily Nutrition Test</Text>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "transparent",
            marginBottom: 20,
          }}
        >
          <ProgressCircle
            percent={30}
            radius={100}
            borderWidth={9}
            color="#FFFFFF"
            shadowColor="#FFA26B"
            bgColor="#2CBA8D"
          >
            <Text style={{ fontWeight: "bold", fontSize: 45, color: "white" }}>
              {" "}
        {totalIntake}{" "}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              {" "}
        left to reach {totalIntakeGoal}{" "}
            </Text>
          </ProgressCircle>
        </View>
        <View style={styles.bottomHalf}>
        {/* <ScrollView> */}
          <Body style={styles.roundedBody}>
            <ScrollView style={styles.scroll}>
            <DashboardCard calories={items.breakfast.calories} meal='breakfast' mealTime={items.breakfast.time} />
            <DashboardCard calories={items.lunch.calories} meal='lunch' mealTime={items.lunch.time} />
            <DashboardCard calories={items.dinner.calories} meal='dinner' mealTime={items.dinner.time} />
            <Text style={styles.mealButton} onPress={() => navigation.navigate('SearchScreen')}>+ Add A Meal</Text>
            </ScrollView>
          </Body>
          {/* </ScrollView> */}
        </View>
      </Container>
    );
  
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2CBA8D",
  },

  scroll: {
    height: "100%",
    width: "100%",

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
    alignItems: "center",
  },

  mealButton: {
    alignSelf: "flex-start",
    fontSize: 15,
    marginLeft: 37,
    marginTop: 12,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#2CBA8D",
  },

  textTitle: {
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    marginTop: 68,
    marginLeft: 37,
    marginBottom: 20,
  },
});
