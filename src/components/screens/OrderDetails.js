import React, { useEffect } from "react";  
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/const";


const invoiceUrl = `${baseUrl}/`

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <AntDesign name="left" size={14} color="black" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const OrderDetails = ({ route }) => {

    useEffect(()=> {
        axios.get()

    }, [])
    const { item } = route.params


    console.log("Order Details component ------------------", item)

    const navigation = useNavigation();
    return (
        <>
            <CustomButton title="Invoice Details" onPress={() => navigation.goBack()} />


        </>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffa600",
    },
    title: {
        marginLeft: 34,
        fontSize: 15,
        color: "white"
    },
})

export default OrderDetails