import React from "react";
import { Card, CardItem, Body, Container } from "native-base";
import { StyleSheet, Text, Image, View } from "react-native";

export default function GoalsCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Daily Fiber Count</Text>
                </CardItem>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // justifyContent: 'space-evenly',
        marginLeft: 48,
        marginRight: 48,
    },

    roundedCard: {
        position: 'relative',
        width: '100%',
        flex: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
    },

    cardItem: {
        flex: 0,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
      },
})