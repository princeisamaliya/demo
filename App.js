import App from "./src/app";
import { createStackNavigator } from "react-navigation";
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
