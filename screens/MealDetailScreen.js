import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Alert, TouchableOpacity, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";
import MealDetailCard from "../components/MealDetailCard";
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
  }

  let decrement = (id) => {
    items && setItems({
      ...items,
      id: {
        ...items.id,
        quantity: items.id.quantity - 1
      }
    })
  }

  const pressHandler = () => {
    navigation.navigate('Search');
  }

  const addMealHandler = () => {
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <View style={styles.background}>
        <View style={styles.topHalf}>

          {/* back to front page/ dashboard */}
          <TouchableOpacity onPress={pressHandler} ><Text style={styles.backButton}>back</Text></TouchableOpacity>
          <Text style={styles.textTitle}>Your meal</Text>
          <View style={styles.bottomHalf}>
            <Body style={styles.roundedBody}>

                  <Card style={styles.roundedCard}>
                    <CardItem style={styles.cardItem}>
                      <TextInput placeholder={'Name your meal'} style={{ paddingLeft: 5, width: '86%', height: 17}} value={mealName} onChangeText={text => setMealName(text)} />
                    </CardItem>
                  </Card> 
                  
                  <View style={styles.innerTextLabel}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>Item</Text>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>Calories</Text>
                  </View>

                  <ScrollView style={styles.scroll}>
                    <MealDetailCard items={items} id={'a'} increment={increment} decrement={decrement} />
                    <MealDetailCard items={items} id={'b'} increment={increment} decrement={decrement} />
                    <MealDetailCard items={items} id={'c'} increment={increment} decrement={decrement} />
                    <MealDetailCard items={items} id={'c'} increment={increment} decrement={decrement} />
                    <MealDetailCard items={items} id={'c'} increment={increment} decrement={decrement} />
                    <MealDetailCard items={items} id={'c'} increment={increment} decrement={decrement} />
                  </ScrollView>

                  <View style={styles.innerTextLabel}>
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Total Calories</Text>
                    <Text style={{fontWeight: "bold", fontSize: 37, color: 'orange'}}>394</Text>
                  </View>

                  <ProfileLogoutCard onPress={addMealHandler} text={'Add Meal'} />
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

  roundedCard: {
    padding: 4,
    borderRadius: 16,
  },

});

export default MealDetailScreen;

