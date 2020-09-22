import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";

export default function ProfileLogoutCard(props) {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={1} >
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold'}}>{props.text}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
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
        backgroundColor: "#2CBA8D",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },
})