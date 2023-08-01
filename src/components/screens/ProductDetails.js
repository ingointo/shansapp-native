import React from "react";
import { View,Text } from "react-native";
import {AntDesign} from "@expo/vector-icons"




const CustomButton = ({ title, onPress }) => {
    return (
            <View>
                <View>
                    <AntDesign name="left" size={20} color="black"  />
                    <Text >{title}</Text>
                </View>
            </View>
    );
};

const ProductDetails = () => {
    return (
        <View>
            <View>
                <CustomButton title="Product Details" onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

export default ProductDetails