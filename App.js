import App from "./src/app";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import CreateTrip from "./src/trips/CreateTrip";
import CreateTripStep from "./src/trips/CreateTripTwo";

export default StackNavigator({
  Home: {
    screen: App
  },
  CreateTrip: {
    screen: CreateTrip
  },
  CreateTripTwo: {
    screen: CreateTripStep
  },
  initialRouteName: "Home"
});
