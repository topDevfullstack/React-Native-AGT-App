import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Signup from "./Signup";
import DashboardScreen from "./DashboardScreen";
import ItemsScreen from "./ItemsScreen";
import TransactionsScreen from "./TransactionsScreen";
import RetailerReceivalScreen from "./RetailerReceivalScreen";
import RequisitionEntryScreen from "./RequisitionEntryScreen";
import RetailerDataScreen from "./RetailerDataScreen";
import PendingRequisitionScreen from "./PendingRequisitiongScreen";
import SavedRequisitionScreen from "./SavedRequisitionScreen";
import WarehouseShipmentReceivalScreen from "./WarehouseShipmentReceivalScreen";
import RetailerSelectScreen from "./RetailerSelectScreen";
import AssignReturnScreen from "./AssignReturnScreen";
import ReturnScreen from "./ReturnScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
  },
};

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
        <Stack.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
        />
        <Stack.Screen
          name="RetailerReceivalScreen"
          component={RetailerReceivalScreen}
        />
        <Stack.Screen
          name="Requisition Entry Screen"
          component={RequisitionEntryScreen}
        />
        <Stack.Screen
          name="RetailerDataScreen"
          component={RetailerDataScreen}
        />
        <Stack.Screen
          name="PendingRequisitionScreen"
          component={PendingRequisitionScreen}
        />
        <Stack.Screen
          name="WarehouseShipmentReceivalScreen"
          component={WarehouseShipmentReceivalScreen}
        />
        <Stack.Screen
          name="SavedRequisitionScreen"
          component={SavedRequisitionScreen}
        />
        <Stack.Screen
          name="RetailerSelectScreen"
          component={RetailerSelectScreen}
        />
        <Stack.Screen
          name="AssignReturnScreen"
          component={AssignReturnScreen}
        />
        <Stack.Screen name="ReturnScreen" component={ReturnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
