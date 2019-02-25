import { createStackNavigator, createAppContainer,StackNavigator } from "react-navigation";
import HomeScreen from './src/screens/Home'
import Details from './src/screens/Details'
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details:{
    screen:Details
  },
  
},{initialRouteName:'Home'});


export default createAppContainer(AppNavigator)