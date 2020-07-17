import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashboardCard from './DashboardCard';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Text>Dashboard</Text>
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