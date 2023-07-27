import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/components/screens/Splash";
import LoginScreen from "./src/components/screens/LoginScreen";
// import Entypo from '@expo/vector-icons/Entypo';
import Signup from './src/components/screens/RegistrationScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./src/components/screens/RegistrationScreen";
import Dashboard from "./src/components/screens/Dashboard";
import BottomDrawer from "./src/routes/BottomDrawer";
import Home from "./src/components/screens/Home";
import Homestack from "./src/routes/HomeStack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <View style={styles.container}>
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="Drawer" component={BottomDrawer} />
          
        </Stack.Navigator>
      </View>

      

    </NavigationContainer>

    

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App
