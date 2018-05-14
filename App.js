import App from "./src/app";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import CreateTrip from "./src/trips/CreateTrip";

export default StackNavigator({
  Home: {
    screen: App
  },
  CreateTrip: {
    screen: CreateTrip
  },
  initialRouteName: "Home"
});
