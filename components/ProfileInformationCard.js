import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

import right from '../src/images/icons/right.png';

// PRE: this function...
// takes in array of length 2: [generalInfoLabel, infoOfIndividual] => props.profileInformation
export default function ProfileInformationCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItemLeft}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>{props.general}</Text>
                </CardItem>
                <CardItem style={styles.cardItemRight}>
                    <Text style={{ fontSize: 14}}>{props.individual}  </Text>
                    <TouchableOpacity onPress={() => {Alert.alert('hi')}} ><Image source={right} style={{ height:14, width:14 }} /></TouchableOpacity>
                </CardItem>
            </Card>
        </View> 
    )

}

const styles = StyleSheet.create({
    roundedCard: {
        position: 'relative',
        width: '100%',
        flex: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        width: '93%',
    },

    cardItemLeft: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
    },

    cardItemRight: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})