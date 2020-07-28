import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

export default function ProfileLogoutCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold'}}>Log Out</Text>
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
        backgroundColor: "#2CBA8D",
        borderRadius: 16,
        width: '93%',
    },

    cardItem: {
        // flexGrow: 5,
        backgroundColor: "#2CBA8D",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },
})