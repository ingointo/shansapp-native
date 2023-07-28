import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const buttonWidth = width * 0.5; // Set the button width to half of the screen width

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, { width: buttonWidth }]} onPress={onPress}>
            <View style={styles.buttonContent}>
                <AntDesign name="left" size={25} color="#daae42" />
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};


const OptionScreen = () => {
    return (
        <View style={styles.container}>
            <CustomButton title="Choose an option" onPress={() => console.log("Button clicked")} />
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={[styles.box, { backgroundColor: '#ededed' },]} >
                    <Text style={styles.textFam}>Search Products</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#ecedef' },]} >
                    <Text style={styles.textFam}>Scan Bardcode</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={[styles.box, { backgroundColor: '#ecedef' },]} >
                    <Text style={styles.textFam}>Product Enquiry</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#ecedef' }]} >
                    <Text style={styles.textFam}>Product Purchase Requisition</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={[styles.box, { backgroundColor: '#ecedef' },]} >
                    <Text style={styles.textFam}>Cash Collection</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#ecedef' }]} />
            </View>
        </View>

        //Creating flex direction

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 6,
        backgroundColor: "#fac02e",
        borderRadius: 25,
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center",
        marginLeft: 13, // Add some spacing between the icon and text
        marginRight: 25,
        fontFamily:"normal"
    },
    box: {
        marginHorizontal: 25,
        width: 175,
        height: 140,
        borderRadius: 25,
        marginBottom: 15,
        justifyContent:"center",
        alignItems:"center"
    },
    textFam: {
        fontFamily:"normal",
        fontWeight: "700",
        textAlign: "center"
    }
});

export default OptionScreen;
