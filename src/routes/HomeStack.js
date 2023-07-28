import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/screens/Home";
import Contacts from "../components/screens/contacts";
import { MaterialIcons } from '@expo/vector-icons';
import Addcontact from "../components/screens/addcontacts";
import OptionScreen from "../components/screens/OptionScreen";
import ContactDetails from "../components/screens/ContactDetails";


export default function Homestack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerBackImage: () => <MaterialIcons name="arrow-back-ios" size={24} color="black" />,
                tabBarVisible: route.name !== 'Contactsnav',
            })}>
            <Stack.Screen name="Homenav" component={Home} options={{ headerShown: false, }} />
            <Stack.Screen name="Contactsnav" component={Contacts} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Contacts" }} />
            <Stack.Screen name="addcontacts" component={Addcontact} options={{ headerStyle: { backgroundColor: '#ffa600', }, headerTintColor: "white", title: "Add Contacts" }} />
            <Stack.Screen name="OptionScreen" component={OptionScreen} options={{ headerStyle: { backgroundColor: '#ffa600' },headerShown:false, headerTintColor: "white", title: "Options" }} />
            <Stack.Screen name="Contactdetails" component={ContactDetails} options={{ headerStyle: { backgroundColor: '#ffa600' }, headerTintColor: "white", title: "Contact Details" }}/>
        </Stack.Navigator>
    );
}