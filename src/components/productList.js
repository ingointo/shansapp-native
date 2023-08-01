import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ProductList = ({ item }) => {
    console.log('Product List ')

    console.log(item)

    const navigation = useNavigation();
    const { productName, productCost } = item

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Contactdetails', { item: item })}>
            <View style={styles.direction}>


                <View style={styles.itemContainer}>
                    <View style={[styles.box, { backgroundColor: '#ebebeb' }]} >
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg',
                            }}
                        />
                        <View style={{ marginLeft: 10, flexDirection: "row" }}>
                            <Text style={styles.textFam}>{productName}</Text>
                            <Text style={styles.textFam}>{productCost}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    box: {
        marginTop: 30,
        marginHorizontal: 25,
        width: 175,
        height: 140,
        borderRadius: 25,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ebebeb",
        borderWidth: 0.5
    },
    boxDiffer: {
        marginHorizontal: 15,
        width: 175,
        height: 140,
        borderRadius: 25,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ebebeb",
        borderWidth: 0.5
    },
    textFam: {
        fontFamily: "sans-serif-medium",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#5f5d5e",
        fontSize: 13,
        letterSpacing: 0.3
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    direction: {
        flexDirection: "row"
    }
});

export default ProductList;
