import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DashboardCard extends React.Component {
    render() {
        let calories = this.props.calories;
        let mealTime = this.props.mealTime;
        let meal = this.props.meal;
        
        return (
            <View>
                <Text>{meal}</Text>
                <Text>{calories} at {mealTime}</Text>
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