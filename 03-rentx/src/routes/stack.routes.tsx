import {
  createStackNavigator
} from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { ScheduleCompleted } from "../screens/ScheduleCompleted";

import { CarDTO } from "../global/dtos/CarDTO";

export type AppStackParamList = {
  Home: undefined;
  CarDetails: {
    car: CarDTO;
  };
  Scheduling: undefined;
  SchedulingDetails: undefined;
  ScheduleCompleted: undefined;
}

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        name="ScheduleCompleted"
        component={ScheduleCompleted}
      />
    </Navigator>
  )
}