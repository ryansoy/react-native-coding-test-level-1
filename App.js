import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./src/screens/MainScreen";
import { ContactUsScreen } from "./src/screens/ContactUsScreen";
import { CatalogListScreen } from "./src/screens/CatalogListScreen";
import { CatalogDetailScreen } from "./src/screens/CatalogDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen}
          options={{
            title: "Contact Us",
          }}
        />
        <Stack.Screen
          name="CatalogListScreen"
          component={CatalogListScreen}
          options={{
            title: "Catelog List",
          }}
        />
        <Stack.Screen
          name="CatalogDetailScreen"
          component={CatalogDetailScreen}
          options={(navProps) => ({
            title: navProps.route.params?.catalogName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
