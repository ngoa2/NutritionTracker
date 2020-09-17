// import React, { useState } from "react";
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
// import { Card, CardItem, Container, Body } from "native-base";
// // import FlatList from 'flatlist-react';
// import right from "../src/images/icons/right.png";
// import ProfileTargetCard from "../components/ProfileTargetCard";
// import ProfileInformationCard from "../components/ProfileInformationCard";
// import ProfileLogoutCard from "../components/ProfileLogoutCard";
// // import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

// const MealScreen = ({ navigation }) => {
//   // @TODO: fix this array after database is plugged in
//   // [target calories, target weight]
//   let targets = [1850, 145];

//   // @TODO: fix these two arrays after database is implemented
//   let profileGeneral = [
//     "Username",
//     "Gender",
//     "Age",
//     "Weight",
//     "Height",
//     "Security",
//   ];
//   let profileIndividual = [
//     "Jane Doe",
//     "Female",
//     "20",
//     "155 lbs",
//     "5 ft 7 in",
//     "",
//   ];
//   let [index, setIndex] = useState(0);

//   function mainContentGenerator(props) {
//     setIndex(index + 1);
//     return (
//       <ProfileInformationCard
//         profileInformation={[
//           profileGeneral[index - 1],
//           profileIndividual[index - 1],
//         ]}
//       />
//     );
//   }

//   const pressHandler = () => {
//     navigation.navigate('Dashboard');
//   }

//   return (
//     <Container>
//       <View style={styles.background}>
//         <View style={styles.screenContainer}>
//         <TouchableOpacity onPress={pressHandler} ><Text style={styles.backButton}>back</Text></TouchableOpacity>
//           <Text style={styles.textTitle}>Meal</Text>
//           <View style={styles.bottomHalf}>

//             <Body style={styles.roundedBody}>

//             </Body>
//           </View>
//         </View>
//       </View>
//     </Container>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: "#2CBA8D",
//   },

//   scroll: {
//     height: "100%",
//     width: "100%",
//   }, 

//   screenContainer: {
//     flex: 0,
//     width: "100%",
//     height: "100%",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     position: "absolute",
//   },

//   textTitle: {
//     marginTop: 25,
//     marginLeft: 50,
//     width: "100%",
//     fontSize: 34,
//     fontStyle: "normal",
//     fontWeight: "bold",
//     color: "white",
//     position: "relative",
//     textAlign: "left",
//   },

//   bottomHalf: {
//     position: "relative",
//     top: 40,
//     width: "100%",
//     height: "100%",
//     flexDirection: "column",
//     backgroundColor: "#2CBA8D",
//   },

//   roundedBody: {
//     position: "relative",

//     backgroundColor: "#F9F9F9",
//     paddingTop: 100,
//     borderRadius: 36,
//     width: "100%",
//   },

//   backButton: {
//     marginTop: 40,
//     width: "100%",
//     color: "white",
//     position: "relative",
//     textAlign: "left",
//   },
// });

// export default MealScreen;



import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Alert, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";
import SearchCard from "../components/SearchCard";

const MealScreen = ({ navigation }) => {

  let DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]

  let [names, setNames] = useState(['Chicken Breast', 'Chicken Nuggets', 'Chicken Wings'])
  let [quantities, setQuantities] = useState([3, 1, 1])
  let [units, setUnits] = useState(['Pieces', 'Pieces', 'Pieces'])

  let [items, setItems] = useState({
    'a': { name: 'Chicken Breast', quantity: 4, unit: 'Pieces' },
    'b': { name: 'Chicken Nuggets', quantity: 3, unit: 'Pieces' },
    'c': { name: 'Chicken Wings', quantity: 2, unit: 'Pieces' }
  })

  let increment = (id) => {
    items && setItems({
      ...items,
      id: {
        ...items.id,
        quantity: items.id.quantity + 1
      }
    })
    // Alert.alert(''+ (items && items.id.quantity))
  }

  let decrement = (id) => {
    items && setItems({
      ...items,
      id: {
        ...items.id,
        quantity: items.id.quantity - 1
      }
    })
    // Alert.alert(''+ (items && items.id.quantity))
  }

  const pressHandler = () => {
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <View style={styles.background}>

        <View style={styles.topHalf}>
          <TouchableOpacity onPress={pressHandler} ><Text style={styles.backButton}>back</Text></TouchableOpacity>
          <Text style={styles.textTitle}>Chicken</Text>
            <View style={styles.bottomHalf}>
              <Body style={styles.roundedBody}>
                  <View style={styles.innerTextLabel}>
                    <Text>Item</Text>
                    <Text>Calories</Text>
                  </View>
                <SearchCard items={items} id={'a'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'b'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'c'} increment={increment} decrement={decrement} />
                <View style={styles.innerTextLabel}>
                    <Text>Total Calories</Text>
                    <Text>394</Text>
                  </View>
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

  backButton: {
    marginTop: 40,
    width: "100%",
    color: "white",
    position: "relative",
    textAlign: "left",
  },

});

export default MealScreen;

