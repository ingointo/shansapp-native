import React from "react"
import { View, StyleSheet, Text, Image, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from "../custombutton";
import Contacts from "./contacts";

export default function Home({navigation}) {
    return (
        <View>
        <StatusBar backgroundColor="#ffa600" />

        <View style={styles.shans}>
            <Text style={styles.shanstext}>Shan's erp biz</Text>
            <FontAwesome name="bell-o" size={24} color="black" />
        </View>

        <View style={styles.search}>
            <FontAwesome name="search" size={24} color="white" />
            <Text style={styles.searchtext}>What are you looking for ?</Text>
            <AntDesign name="barcode" size={24} color="white" />
        </View>

        <View>
            <Text style={{ fontWeight: '500', textAlign: 'center', marginTop: 8, fontSize: 16, }}>Discount available for Bulk Purchase</Text>
        </View>

        <View>
            <Image source={require('../../../assets/huaweibanner.jpg')} style={{ width: 450, height: 200, resizeMode: "stretch" }} />
        </View>

        <View style={styles.button}>
                <View style={styles.buttonicon}>
                <MaterialIcons name="directions-bike" size={28} color="black" />
                <CustomButton title="Pickup" color="#32c918" onPress={() => console.log('Button pressed')} />
            </View>

            <View style={styles.buttonicon}>
                <MaterialIcons name="design-services" size={28} color="black" />
                <CustomButton title="Services" color="#fe0000" onPress={() => console.log('Button pressed')} />
            </View>

            <View style={styles.buttonicon}>
                <MaterialIcons name="contact-page" size={28} color="black" />
                <CustomButton title="Contacts" color="#3c7dff" onPress={() => navigation.navigate("Contactsnav")} />
            </View>
        </View>

        <FAB
            style={styles.fab}
            icon={() => <MaterialIcons name="message" size={24} color="white" />}
            onPress={() => console.log('FAB pressed')}
        />
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Text: {
        padding: 25,
    },

    shanstext: {
        fontSize: 20,
    },

    shans: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        marginTop: 10,
    },

    fab: {
        position: 'absolute',
        left: 28,
        bottom: -220,
        backgroundColor: '#ffa600',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    search: {
        marginTop: 30,
        marginLeft: 27,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        paddingHorizontal: 7,
        justifyContent: 'space-evenly',
        width: 350,
        backgroundColor: '#222222',
    },

    searchtext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#eea40f',
    },

    buttonicon: {
        borderWidth: 0.5,
        borderColor: '#222222',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        maxWidth: 500,
        alignItems: 'center',
        marginLeft: 10,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
    },
    });