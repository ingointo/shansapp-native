import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/components/screens/Splash";
import LoginScreen from "./src/components/screens/LoginScreen";
import Signup from './src/components/screens/RegistrationScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./src/components/screens/RegistrationScreen";
import BottomDrawer from "./src/routes/BottomDrawer";
import Home from "./src/components/screens/Home";
import ProductScreen from "./src/components/screens/ProductScreen";
import Contacts from "./src/components/screens/contacts";
import Addcontact from "./src/components/screens/addcontacts";
import OptionScreen from "./src/components/screens/OptionScreen";
import ContactDetails from "./src/components/screens/ContactDetails";
import ProductDetails from "./src/components/screens/ProductDetails";
import MyOrdersScreen from "./src/components/screens/Myorders";
import OrderDetails from "./src/components/screens/OrderDetails"
import CashCollection from "./src/components/screens/CashCollection";
import NewCollection from "./src/components/screens/NewCollection";
import Scanner from "./src/components/QrScanner/Scanner";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>


        <Stack.Navigator screenOptions={({ route }) => ({

          headerStyle: { backgroundColor: '#ffa600' },
          headerShadowVisible: false,
          headerTintColor: "white"


        })}>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, }}  />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="Drawer" component={BottomDrawer} options={{ headerShown: false, }}/>
          <Stack.Screen name="Homenav" component={Home} options={{ headerShown: false, }} />
          <Stack.Screen name="Contactsviewnav" component={Contacts} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Contacts" }} />
          <Stack.Screen name="Contactdetails" component={ContactDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerTintColor: "white", title: "Order Summery" }} />
          <Stack.Screen name="addcontacts" component={Addcontact} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Add Contacts" }} />
          <Stack.Screen name="OptionScreen" component={OptionScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, headerTintColor: "white", title: "Options" }} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Products Screen" }} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Product Details" }} />
          <Stack.Screen name="Myorders" component={MyOrdersScreen} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Invoice Details" }} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Invoice Details" }} />
          <Stack.Screen name="CashCollection" component={CashCollection} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: true, title: "Cash Collection" }} />
          <Stack.Screen name="NewCollection" component={NewCollection} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: true, title: "New Collection" }} />
          <Stack.Screen name="Scanner" component={Scanner} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerShown: false, title: "Scanner" }} />
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
