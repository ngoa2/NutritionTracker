import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DashboardScreen from "../screens/DashboardScreen";
import MealScreen from "../screens/MealScreenAlt";
import SearchScreen from "../screens/SearchScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import MealFixedScreen from "../screens/MealFixedScreen";

const screens = {
    // default dashboard
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            headerShown: false,
        }
    }, 
    Meal: {
        screen: MealScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    MealFixed: {
        screen: MealFixedScreen,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const ButtonNav = createStackNavigator(screens);

export default createAppContainer(ButtonNav);