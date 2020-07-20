import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashboardCard from './DashboardCard';
import { Container, Header, Button, Body } from 'native-base';
import ProgressCircle from 'react-native-progress-circle';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <View style = {styles.test}>
                    <Text style = {styles.textTitle}>Daily Nutrition</Text>
                    <Container style = {{justifyContent:'center', alignSelf:'center', backgroundColor: 'transparent'}}>
                        <ProgressCircle percent={30}
                            radius={100}
                            borderWidth={9}
                            color="#FFFFFF"
                            shadowColor="#FFA26B"
                            bgColor="#2CBA8D">
                                <Text style = {{fontWeight:'bold', fontSize: 45, color: 'white'}}>460</Text>
                                <Text style = {{fontWeight:'bold', fontSize: 15, color: 'white'}}>left to reach 1840</Text>
                            </ProgressCircle>
                    </Container>
                </View>
                <View style = {styles.test2}>
                    <Body style = {styles.roundedBody}>
                        <DashboardCard calories = '10' meal = 'dinner' mealTime= '10pm' />
                        <DashboardCard calories = '10' meal = 'dinner' mealTime= '10pm' />
                        <DashboardCard calories = '10' meal = 'dinner' mealTime= '10pm' />
                        <Text style = {styles.mealButton}>+ Add A Meal</Text>
                    </Body>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    test: {
        flex: 1,
        backgroundColor: '#2CBA8D', 
    },
    test2: {
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: '#2CBA8D', 

    },

    roundedBody: {
        backgroundColor: '#F9F9F9',
        paddingTop: 8,
        borderRadius: 36,
    },

    mealButton: {
        alignSelf: 'flex-start',
        fontSize: 15,
        marginLeft: 37,
        marginTop: 12,
        fontWeight: 'bold',
        color: '#2CBA8D',
    },

    textTitle: {
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 68,
        marginLeft: 37,
    }
});