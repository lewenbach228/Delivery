import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// import { useFonts } from "expo-font";

import CustomDrawer from "./navigation/CustomDrawer";

const App = () => {
  // const [loaded] = useFonts({
  //   "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
  //   "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
  //   "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  //   "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  // })

  // if (!loaded) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
