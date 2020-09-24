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
            <View
              style={{ width: "90%", marginTop: 15, justifyContent: "center" }}
            >
              <SearchBar style={{ alignItems: "center" }} />
            </View>
            <View
              style={{
                width: "90%",
                marginTop: 30,
                padding: 20,
                paddingBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.textHeading}>Item</Text>
              <Text style={styles.textHeading}>Calories</Text>
            </View>
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MealCard
                mealItem="Chicken Breast"
                quantity="2 Pieces"
                calories="400"
              ></MealCard>
              <MealCard
                mealItem="Broccoli"
                quantity="2 Pieces"
                calories="200"
              ></MealCard>
              <MealCard
                mealItem="Chicken Breast"
                quantity="2 Pieces"
                calories="400"
              ></MealCard>
            </View>
            <View
              style={{
                width: "90%",
                marginBottom: 20,
                marginTop: 15,
                padding: 20,
                paddingBottom: 10,
                paddingTop: 0,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Total Calories
              </Text>
              <Text
                style={{ color: "orange", fontWeight: "bold", fontSize: 36 }}
              >
                765
              </Text>
            </View>
            <Button
              style={{
                backgroundColor: "#2CBA8D",
                alignSelf: "center",
                borderRadius: 36,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingHorizontal: 130,
                }}
              >
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
    flex: 1,
    backgroundColor: "#2CBA8D",
  },

  topHalf: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
  },

  searchBar: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 80,
  },

  textTitle: {
    width: "100%",
    padding: 25,
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    top: 0,
    textAlign: "left",
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
    borderRadius: 36,
    width: "100%",
  },

  bottomHalf: {
    position: "relative",
    top: 10,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#2CBA8D",
  },

  backButton: {
    marginTop: 40,
    width: "100%",
    color: "white",
    position: "relative",
    textAlign: "left",
  },
});

export default MealScreen;
