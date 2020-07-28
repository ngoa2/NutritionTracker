import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";
import SearchCard from "../components/SearchCard";

const SearchScreen = () => {

  let DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]

  return (
    <Container>
      <View style={styles.background}>

        <View style={styles.topHalf}>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
          <Text style={styles.textTitle}>Chicken</Text>
            <View style={styles.bottomHalf}>
              <Body style={styles.roundedBody}>
                <SearchCard />
                <SearchCard />
                <SearchCard />
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

  topHalf: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: 'absolute',
  },

  searchBar: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 80,
  },

  textTitle: {
    width: '100%',
    padding: 25,
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    top: 0,
    textAlign: 'left',
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
    borderRadius: 36,
    width: '100%',
  },

  bottomHalf: {
    position: 'relative',
    top: 10,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    backgroundColor: "#2CBA8D",
  },

});

export default SearchScreen;






// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import SearchBar from "../components/SearchBar";

// const SearchScreen = () => {
//   return (
//     <View style={styles.container}>
//       <SearchBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default SearchScreen;
