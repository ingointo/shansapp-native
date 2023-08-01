import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Text, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import axios from "axios";

import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { baseUrl } from "../../api/const";
import ProductList from "../productList";

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.buttonContainer, { backgroundColor: '#ffa600' }]}>
                <View style={styles.buttonContent}>
                    <AntDesign name="left" size={20} color="black" style={styles.icon} />
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const ProductScreen = () => {
    const navigation = useNavigation();

    const productUrl = `${baseUrl}/viewProducts`

    const [productNames, setProductNames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get(productUrl)
            .then((res) => {
                const procuctNamesArr = res.data.data.map((item) => ({
                    productName: item.product_name,
                    productCost: item.cost
                }));
                setProductNames(procuctNamesArr);
                setFilteredProducts(procuctNamesArr);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <CustomButton title="Products" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Search Products"
                    value={searchQuery}
                    style={styles.searchBox}
                />
            </View>
            <View style={styles.productListContainer}>
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ProductList item={item} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBox: {
        borderRadius: 23,
        borderWidth: 15,
        borderColor: '#ffa600',
        backgroundColor: "white",
    },
    buttonContainer: {
        backgroundColor: "#ffa600",
    },
    buttonContent: {
        flexDirection: "row",
        marginLeft: 10,
    },
    icon: {
        fontSize: 20,
    },
    buttonText: {
        marginLeft: 34,
        fontSize: 18,
    },
    searchContainer: {
        backgroundColor: "#ffa600",
    },
    productListContainer: {
        flexDirection: 'row', // Add this to render items in a row format
    },
});

export default ProductScreen;
