import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Body, Button } from "native-base";
import SearchBar from "../components/SearchBar";
import MealCard from "../components/MealCard";

const MealScreen = () => {
  return (
    <Container>
      <View style={styles.background}>
        <Text style={styles.textTitle}>Your meal</Text>
        <View style={styles.bottomHalf}>
          <Body style={styles.roundedBody}>
            <View style= {{width: "90%", marginTop: 15, justifyContent: "center"}}>
              <SearchBar style ={{alignItems: "center"}}/>
            </View>
            <View style ={{width: "90%", marginTop: 30, padding: 20, paddingBottom: 10, flexDirection: "row", justifyContent:"space-between"}}>
              <Text style = {styles.textHeading}>Item</Text>
              <Text style = {styles.textHeading}>Calories</Text>
            </View>
            <View style = {{ width: "90%", justifyContent: "center", alignItems: "center"}}>
              <MealCard mealItem = "Chicken Breast" quantity = "2 Pieces" calories = "400"></MealCard>
              <MealCard mealItem = "Broccoli" quantity = "2 Pieces" calories = "200"></MealCard>
              <MealCard mealItem = "Chicken Breast" quantity = "2 Pieces" calories = "400"></MealCard>
            </View>
            <View style ={{width: "90%", marginBottom: 20, marginTop: 15, padding: 20, paddingBottom: 10, paddingTop: 0, flexDirection: "row", justifyContent:"space-between"}}>
              <Text style = {{fontWeight:"bold", fontSize: 20}}>Total Calories</Text>
              <Text style = {{color: "orange", fontWeight:"bold", fontSize: 36}}>765</Text>
            </View>
            <Button style={{backgroundColor:"#2CBA8D", alignSelf:"center", borderRadius: 36}}>
              <Text style={{color:"white" ,fontWeight: "bold", fontSize:20, paddingHorizontal: 130,}}>
                Add a Meal
              </Text>
            </Button>
          </Body>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFA26B",
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

  textHeading: {
    fontSize: 17,
    marginTop: 0,
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

export default MealScreen;
