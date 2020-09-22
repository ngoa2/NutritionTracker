import React, { useState } from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text, Image, View, Alert } from "react-native";

import up from '../src/images/icons/up.png';
import down from '../src/images/icons/down.png';
import plus from '../src/images/icons/plus.png';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MealDetailCard(props) {
    // function increment(props) {
    //   props.setQuantity(props.quantities.map((quant, id) => {
    //     quant.
    //   }))
    // }

    return (
        <View style={styles.container}> 
          {/* <View style={styles.left}> */}
            <Card style={styles.roundedCard}>
              <CardItem style={styles.cardItemLeft}>
                <TouchableOpacity onPress={() => props.increment(props.id)}><Text style={{ fontWeight: 'bold', fontSize: 20, width:'100%' }}>{props.items && props.items[props.id].name}</Text></TouchableOpacity>
                <Text style={{ fontSize: 15 }}>{props.items && props.items[props.id].unit}</Text>
              </CardItem>
              <CardItem style={styles.cardItemRight}>
                <Text style={{ fontWeight: 'bold', fontSize: 32 }}>450</Text>
              </CardItem>
            </Card>
          {/* </View> */}
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    roundedCard: {
      position: 'relative',
      width: '86%',
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      padding: 8,
      backgroundColor: "#FFFFFF",
      borderRadius: 15,
      marginBottom: 8,
    },

    cardItemLeft: {
        flexGrow: 5,
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
      },

    cardItemRight: {
        // flex: 1,
        // flexDirection: 'column',
    },

    // left: {
    //     flex: 1,
    //     flexGrow: 1.7,
    //     position: 'relative',
    // },

    // right: {
    //     flex: 1,
    //     marginLeft: 21,
    // },
});    