import React, { useState } from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text, Image, View } from "react-native";

import up from '../src/images/icons/up.png';
import down from '../src/images/icons/down.png';
import plus from '../src/images/icons/plus.png';

export default function SearchCard(props) {
    let [names, setNames] = useState(['Chicken Breast', 'Chicken Nuggets', 'Chicken Wings'])
    let [quantities, setQuantities] = useState([1, 1, 1])
    let [units, setUnits] = useState(['Pieces', 'Pieces', 'Pieces'])



    return (
        <View style={styles.container}> 
        <View style={styles.left}>
        <Card style={styles.roundedCard}>
        <CardItem style={styles.cardItemLeft}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, width:'100%' }}>{names[0]}</Text>
          <Text style={{ fontSize: 15 }}>{units[0]}</Text>
        </CardItem>
        <CardItem style={styles.cardItemRight}>
          <Image source={up} style={{ height:10, width:10 }} />
          <Text style={{ fontWeight: 'bold', fontSize: 32 }}>{quantities[0]}</Text>
          <Image source={down} style={{ height:10, width:10 }} />
        </CardItem>
      </Card>
        </View>

        <View style={styles.right}>
            <Image source={plus} style={{ height:22, width:22 }} />
        </View>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        marginLeft: 52,
        marginTop: 5,
        alignItems: 'center',
    },

    roundedCard: {
      position: 'relative',
      width: '100%',
      flex: 0,
      flexDirection: "row",
      alignItems: 'center',
    //   marginLeft: 30,
    //   marginTop: 8,
      padding: 4,
      backgroundColor: "#FFFFFF",
      borderRadius: 15,
    },

    cardItemLeft: {
        flexGrow: 5,
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
      },

    cardItemRight: {
        flex: 1,
        flexDirection: 'column',
    },

    left: {
        flex: 1,
        flexGrow: 3.7,
        position: 'relative',
    },

    right: {
        flex: 1,
        marginLeft: 21,
    },
});    