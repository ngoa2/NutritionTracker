import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, TouchableOpacity, Alert } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

// PRE: this function...
// takes in array of length 2: [target calories, target weight] => props.targets
export default function ProfileTargetCard(props) {
    return (
        <View style={styles.container}>
            
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
<<<<<<< HEAD
                    <Text style={{ color: "#FFA26B", fontWeight: 'bold', fontSize: 30, paddingBottom: 8,}}>{props.targets[0]}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 15}}>Target Calories</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2CBA8D', alignSelf: 'flex-end'}}>Edit</Text>
=======
                    <Text style={{ color: "#FFA26B", fontWeight: 'bold', fontSize: 30}}>{props.targets[0]}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Target Calories</Text>
                    <Text style={{ fontSize: 12, color: '#2CBA8D', alignSelf: 'flex-end'}}>Edit</Text>
                    {/* <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => {Alert.alert('hi')}} ><Text style={{ fontSize: 30, color: '#2CBA8D'}}>Edit</Text></TouchableOpacity> */}
>>>>>>> b0edb119ca2fd0f49931649ef6ca5e0e98a3d186
                </CardItem>   
            </Card>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
<<<<<<< HEAD
                    <Text style={{ color:"#FFA26B", fontWeight: 'bold', fontSize: 30, paddingBottom: 8,}}>{props.targets[1]}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 15}}>Target Weight</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2CBA8D', alignSelf: 'flex-end' }}>Edit</Text>
=======
                    <Text style={{ color:"#FFA26B", fontWeight: 'bold', fontSize: 30}}>{props.targets[1]}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Target Calories</Text>

                    <Text style={{ fontSize: 12, color: '#2CBA8D', alignSelf: 'flex-end'}}>Edit</Text>

>>>>>>> b0edb119ca2fd0f49931649ef6ca5e0e98a3d186
                </CardItem>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginLeft: 8,
        marginRight: 8,
        zIndex: 1,
    },

    roundedCard: {
        position: 'relative',
        width: '38%',
        flex: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
    },

    cardItem: {
        flex: 1,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
      },

})