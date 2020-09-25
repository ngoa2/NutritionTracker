import React from "react";
import { Card, CardItem, Body, Container } from "native-base";
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert } from "react-native";

export default function GoalsCard(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.roundedCard}>
                <CardItem style={styles.cardItem}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Maintain Calorie Count</Text>
                    <Text style={{marginTop: 15, fontSize: 10}}>Use the silder to select your preferred calorie intake.</Text>
                    <Text style={{marginTop: 15, fontSize: 20, fontWeight: 'bold'}}>2000kCal</Text>

                    <TouchableOpacity activeOpacity={1} onPress={() => {Alert.alert('hi')}} >
                    <Card style={styles.roundedCardGreen}>
                        <CardItem style={styles.cardItemGreen}>
                            <Text style={{ color:'white', fontSize:12, fontWeight:'bold' }}>Add Goal</Text>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>

                </CardItem>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 23,
        marginRight: 23,
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

    roundedCardGreen: {
        position: 'relative',
        width: '100%',
        flex: 0,
        flexDirection: "row",
        alignItems: 'center',
        padding: 4,
        borderRadius: 15,
        backgroundColor: "#2CBA8D",
    },

    cardItemGreen: {
        backgroundColor: "#2CBA8D",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
    },

    cardItem: {
        flex: 0,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      },
})