
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';

export default class GoalBar extends React.Component {
    render(){
    let percentage = this.props.percentage;
    let goalName = this.props.goalName;
    
    let stringPer = percentage * 100 + '%'
    return (
        <View style={{alignContent:"flex-start", marginBottom: 10,}}>
            <Text style={{marginLeft: 2, fontSize: 12, fontWeight: "500", marginBottom: 10}}>{goalName}</Text>
            <View style={{flexDirection: "row" , width: "100%", alignItems:"center"}}>
                <View>
                    <Progress.Bar progress={percentage} width={278} height={18} borderRadius ={11} color= "#FFA26B"unfilledColor={'white'} borderWidth={0}/>
                </View>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "500", color: "#3F3F44"}}>{stringPer}</Text>
            </View>
        </View>
    );
    }
}

