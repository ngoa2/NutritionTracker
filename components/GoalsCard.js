import React, { useState } from "react";
import { Card, CardItem, Body, Container } from "native-base";
import { StyleSheet, Text, Image, View, Alert, TouchableOpacity } from "react-native";

export default function GoalsCard(props) {
    let [clicked, setClicked] = useState(false)

    function click(props) {
        setClicked(true)
        setTimeout(function(){setClicked(false)}, 150)

        Alert.alert('hi')
    }
    return (
        <View style={(clicked)? styles.containerClicked : styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={1} onPress={()=>{click()}}>
                <Card style={styles.roundedCard}>
                    <CardItem style={styles.cardItem}>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>Daily Fiber Count</Text>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 48,
        marginRight: 48,
    },

    containerClicked: {
        marginLeft: 30,
        marginRight: 30,
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