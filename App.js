import App from "./src/app";
import { createStackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import CreateTrip from "./src/trips/CreateTrip";

export default createStackNavigator({
  Home: {
    screen: App
  },
  CreateTrip: {
    screen: CreateTrip
  },
  initialRouteName: "Home"
});

{/*}
export default TabNavigator(
  {
    Home: {
    screen: App,
  },
  CreateTrip: {
    screen: CreateTrip
  },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);*/}