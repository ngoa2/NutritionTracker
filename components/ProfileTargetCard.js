import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

export default function ProfileTargetCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{ color: "#FFA26B", fontWeight: 'bold', fontSize: 30}}>1850</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Target Calories</Text>
                    <Text style={{ fontSize: 12, color: '#2CBA8D', alignSelf: 'flex-end' }}>Edit</Text>
                </CardItem>
                
                    
            </Card>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{ color:"#FFA26B", fontWeight: 'bold', fontSize: 30}}>145</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Target Weight</Text>
                    <Text style={{ fontSize: 12, color: '#2CBA8D', alignSelf: 'flex-end' }}>Edit</Text>
                </CardItem>
                    
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        flexDirection: "row",
        // width: '100%',
        justifyContent: 'space-evenly',
        marginLeft: 8,
        marginRight: 8,
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