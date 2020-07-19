import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, CardItem} from 'native-base';
import DashboardCard from './DashboardCard';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Text>Dashboard</Text>
                <Card>
                    <CardItem>
                            <Text>Test</Text>
                    </CardItem>
                </Card>
                <DashboardCard calories = "500 calories" meal = "breakfast" mealTime = "9am"/>
                <DashboardCard calories = "900 calories" meal = "lunch" mealTime = "12pm"/>
                <DashboardCard calories = "2000 calories" meal = "dinner" mealTime = "7pm"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});