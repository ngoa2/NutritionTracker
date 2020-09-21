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
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Alert, TouchableOpacity, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";
import SearchCard from "../components/SearchCard";
import ProfileLogoutCard from "../components/ProfileLogoutCard";

const MealDetailScreen = ({ navigation }) => {

  let DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]

  let [names, setNames] = useState(['Chicken Breast', 'Chicken Nuggets', 'Chicken Wings'])
  let [quantities, setQuantities] = useState([3, 1, 1])
  let [units, setUnits] = useState(['Pieces', 'Pieces', 'Pieces'])

  let [items, setItems] = useState({
    'a': { name: 'Chicken Breast', quantity: 4, unit: 'Pieces' },
    'b': { name: 'Chicken Nuggets', quantity: 3, unit: 'Pieces' },
    'c': { name: 'Chicken Wings', quantity: 2, unit: 'Pieces' }
  })

  let [mealName, setMealName] = useState('');

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
    navigation.navigate('Search');
  }

  return (
    <Container>
      <View style={styles.background}>

        <View style={styles.topHalf}>
          <TouchableOpacity onPress={pressHandler} ><Text style={styles.backButton}>back</Text></TouchableOpacity>
          <Text style={styles.textTitle}>Your meal</Text>
            <View style={styles.bottomHalf}>
              <Body style={styles.roundedBody}>
                  <TextInput placeholder={'Name your meal'} style={{ width: '86%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20 }} value={mealName} onChangeText={text => setMealName(text)} />
                  <View style={styles.innerTextLabel}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>Item</Text>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>Calories</Text>
                  </View>
                  <ScrollView style={styles.scroll}>
                <SearchCard items={items} id={'a'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'b'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'c'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'c'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'c'} increment={increment} decrement={decrement} />
                <SearchCard items={items} id={'c'} increment={increment} decrement={decrement} />
                </ScrollView>
                <View style={styles.innerTextLabel}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Total Calories</Text>
                    <Text style={{fontWeight: "bold", fontSize: 37, color: 'orange'}}>394</Text>
                  </View>
                  <ProfileLogoutCard />
                  <View style={{ paddingBottom: 40 }}></View>
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
    backgroundColor: "orange",
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
    paddingTop: 10,
    paddingLeft: 25,
    paddingBottom: 10,
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
    marginBottom: -20,
    flex: 1,
    position: 'relative',
    top: 10,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    backgroundColor: "orange",
  },

  backButton: {
    marginTop: 40,
    width: "100%",
    color: "white",
    position: "relative",
    textAlign: "left",
  },

  innerTextLabel: {
    position: "relative",
    width: '75%',
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  scroll: {
    height: "100%",
    width: "100%",

  }, 

});

export default MealDetailScreen;

