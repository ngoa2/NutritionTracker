import React, { useState } from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text, Image, View, Alert } from "react-native";

import up from '../src/images/icons/up.png';
import down from '../src/images/icons/down.png';
import plus from '../src/images/icons/plus.png';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchCard(props) {
    // function increment(props) {
    //   props.setQuantity(props.quantities.map((quant, id) => {
    //     quant.
    //   }))
    // }

    return (
        <View style={styles.container}> 
          <View style={styles.left}>
            <Card style={styles.roundedCard}>
              <CardItem style={styles.cardItemLeft}>
              <TouchableOpacity onPress={() => props.increment(props.id)}><Text style={{ fontWeight: 'bold', fontSize: 20, width:'100%' }}>{props.items && props.items[props.id].name}</Text></TouchableOpacity>
                <Text style={{ fontSize: 15 }}>{props.items && props.items[props.id].unit}</Text>
              </CardItem>
              <CardItem style={styles.cardItemRight}>
                <TouchableOpacity onPress={() => {props.increment(props.id)}}><Image source={up} style={{ height:10, width:10 }} /></TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 32 }}>{props.items && props.items[props.id].quantity}</Text>
                <TouchableOpacity onPress={()=>{props.decrement(props.id)}}><Image source={down} style={{ height:10, width:10 }} /></TouchableOpacity>
              </CardItem>
            </Card>
          </View>
          <View style={styles.right}>
            <TouchableOpacity onPress={()=>{Alert.alert('clicked')}}><Image source={plus} style={{ height:22, width:22 }} /></TouchableOpacity>
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