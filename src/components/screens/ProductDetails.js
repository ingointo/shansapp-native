import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <AntDesign name="left" size={20} color="black" />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ProductDetails = (props) => {
  console.log("Product Details page ++++++++++++++++++++++++++++++++++")
  console.log(props)
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomButton title="Product Details" onPress={() => navigation.goBack()} />
      <View style={styles.detailsContainer}>
        <View style={styles.imgNameContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://www.techspot.com/images2/news/bigimage/2021/05/2021-05-18-image-27-j_1100.webp',
            }}
          />
          <Text style={styles.productName}>Product name</Text>
          <View style={styles.rowContainer}>
            <Text>In Stock</Text>
            <Text>Dynamic Price</Text>
          </View>
        </View>
        <View>
          <Text>Product Code</Text>
          <Text>Category</Text>
          <Text>On Hand</Text>
          <Text>Total Quantity</Text>
          <Text>More Information</Text>
          <Text>Product Location</Text>
          <Text>Area</Text>
          <Text>Alternate Products</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffa600",
  },
  title: {
    marginLeft: 34,
    fontSize: 17,
    color: "white"
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  detailsContainer: {
    marginHorizontal: 15,
    marginTop: 10
  },
  imgNameContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productName: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 16
  },
  rowContainer: {
    flexDirection: "row-reverse"
  }
});

export default ProductDetails;
