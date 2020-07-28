import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

import right from '../src/images/icons/right.png';

export default function ProfileInformationCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItemLeft}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Username</Text>
                </CardItem>
                <CardItem style={styles.cardItemRight}>
                    <Text style={{ fontSize: 14}}>Jane Doe  </Text>
                    <Image source={right} style={{ height:14, width:14 }} />
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
        // flexGrow: 5,
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