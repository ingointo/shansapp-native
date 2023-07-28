import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/components/screens/Splash";
import LoginScreen from "./src/components/screens/LoginScreen";
// import Entypo from '@expo/vector-icons/Entypo';
import Signup from './src/components/screens/RegistrationScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./src/components/screens/RegistrationScreen";
import BottomDrawer from "./src/routes/BottomDrawer";
import Home from "./src/components/screens/Home";
import Contacts from "./src/components/screens/contacts";
import { MaterialIcons } from '@expo/vector-icons';
import Addcontact from "./src/components/screens/addcontacts";
import OptionScreen from "./src/components/screens/OptionScreen";
import ContactDetails from "./src/components/screens/ContactDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <View style={styles.container}>
        
        <Stack.Navigator screenOptions={({ route }) => ({
                headerBackImage: () => <MaterialIcons name="arrow-back-ios" size={24} color="black" />,
                tabBarVisible: route.name !== 'Contactsnav',
                headerStyle:{backgroundColor:'#ffa600'},
                headerShadowVisible:false,
                
                
            })}>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="Drawer" component={BottomDrawer} />
          <Stack.Screen name="Homenav" component={Home} options={{ headerShown: false, }} />
          <Stack.Screen name="Contactsnav" component={Contacts} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Contacts" }} />
          <Stack.Screen name="addcontacts" component={Addcontact} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Add Contacts" }} />
          <Stack.Screen name="OptionScreen" component={OptionScreen} options={{ headerStyle: { backgroundColor: '#ffa600' },headerShown:false, headerTintColor: "white", title: "Options" }} />
          <Stack.Screen name="Contactdetails" component={ContactDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerTintColor: "white", title: "Contact Details" }}/>
          
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
