import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import axios from "axios";
import QuantityChanger from "../QuantityChanger/QuantityChanger";


const CustomAddButton = ({ title, onPress }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.addbutton}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const CustomSubmitButton = ({ title, onPress }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.submitbutton}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default function ContactDetails({ route, navigation }) {
  const { item, product } = route.params;
  console.log("Product prop:", product);

  if (product) {
    const total = product.productCost
  }

  console.log(item, product)
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [productPrice, setProductPrice] = useState();


  useEffect(() => {
    // On initial load, set the products from route params
    if (product) {
      setProducts([product]);
    }
  }, [product]);

  const handleAddToProducts = () => {
    if (product && quantity && price) {
      const productWithDetails = { ...product, quantity: Number(quantity), price: Number(price) };
      setProducts((prevProducts) => [...prevProducts, productWithDetails]);
      setQuantity(1); // Set quantity back to 1 for the next product
      setPrice(0); // Set price back to 0 for the next product
    }
  };
  console.log("Products array:", products);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const date = new Date();
  function handlesubmit() {
    axios.post('http://137.184.67.138:3004/createCombinedInvoicePaymentReceived', {


      "date": date,
      "amounts": 34567890,
      "invoice_status": "fully_paid",
      "remarks": null,
      "trn_no": null,
      "delivery_address": "Dubai",
      "due_date": "2023-08-03",
      "paid_amount": 34567890,
      "due_amount": 0,
      "customer_id": item._id,
      "customer_name": item.name,
      "warehouse_id": item.warehouse_id,
      "warehouse_name": item.warehouse_name,
      "pipeline_id": null,
      "payment_terms_id": null,
      "delivery_method_id": null,
      "sales_person_id": "644124f9b5cd0bbe6c5216d4",
      "sales_person_name": "",
      "sales_channel_id": null,
      "state_id": "6454ada82bbaec5968bb22aa",
      "quotation_id": null,
      "sales_order_id": null,
      "currency_id": "644ce4163f3da529998602a8",
      "product_id": null,
      "total_amount": 34567890,
      "untaxed_total_amount": 34567890,
      "total_purchase_cost": 100,
      "payment_status": "fully_paid",
      "total_tax_amount": 0,
      "tax_type_id": null,
      "total_discount_amount": 0,
      "crm_product_line_ids": [
        {
          "product_id": product._id,
          "product_name": product.name,
          "tax_type_id": "648d9b8fef9cd868dfbfa37f",
          "tax_value": 0,
          "uom": null,
          "qty": quantity,
          "unit_price": price,
          "discount_percentage": 0,
          "remarks": null,
          "total": price*quantity,
          "unit_cost": 100,
          "total_cost": 100,
          "return_quantity": 0
        }
      ],
      "image_url": [],
      "payment_date": "2023-08-03",
      "amount": 34567890,
      "type": "payment",
      "chq_no": null,
      "chq_date": "",
      "chq_type": null,
      "chart_of_accounts_id": null,
      "chart_of_accounts_name": null,
      "status": "new",
      "transaction_no": null,
      "transaction": null,
      "payment_method_id": "643ea581407e36e9962b9d2c",
      "payment_method_name": "credit",
      "journal_id": null,
      "chq_bank_id": null,
      "is_cheque_cleared": true,
      "reference": null,
      "in_amount": 0,
      "out_amount": 34567890,
      "due_balance": 0,
      "outstanding": 34567890,
      "credit_balance": -34467890,
      "Pdc_status": ""

    }).then(res => {
      console.log(res);
      console.log("success");
      navigation.navigate('Contactsviewnav');
    }).catch(err => console.log(err))
  }


  const RemoveButton = ({ productName }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleRemoveFromProducts(productName)}>
        <View style={styles.removeButton}>
          <Text style={styles.removeButtonText}>REMOVE</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const handleRemoveFromProducts = (productNameToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.productName !== productNameToRemove)
    );
  };
// const total = product.productCost * quantity
  return (
    
    <View style={styles.container}>
      <View style={styles.details}>
        {/* check item found or not  */}
        {item ? (<View style={styles.rowContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.mobile}>{item.customer_mobile}</Text>
        </View>) : (
          // If product is not found in the products list
          <View style={styles.product}>
            <Text>Item not found</Text>
          </View>)}
        <MaterialIcons name="smartphone" size={35} color="black" />
      </View>
      <View style={styles.addButtonContainer}>
        <CustomAddButton
          title="Add Products(s)"
          onPress={() => { navigation.navigate('ProductScreen', { contact: item }); handleAddToProducts(); }}
        />
      </View>
      {/* Check if product is available */}
      {product && products.some((prod) => prod.productName === product.productName) && (
        <ScrollView key={product._id}>

          <View style={styles.product}>
            <Text style={styles.productTitle}>{product.productName}</Text>
            <View style={styles.productHeaderLabel}>
              <Text style={styles.productHeaderLabel}>Availability:  </Text>
              <Text style={styles.stockCheck}>In Stock</Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.productHeaderLabel}>Price:</Text>
              <View style={styles.priceContainer}>
               <TextInput keyboardType="numeric" onChangeText={(text)=>{setPrice(parseFloat(text))} }  value={price.toString()}></TextInput>
              </View>
              <Text style={styles.priceText}>AED</Text>
            </View>
            <View style={styles.removeContainer}>
              <QuantityChanger
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                setQuantity={setQuantity} // Add this line
              />
              <RemoveButton productName={product.productName} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>Product Code:</Text>
              <Text style={styles.productText}>{product.productCode}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>Product category:</Text>
              <Text style={styles.productText}>{product.productCategory}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>On Hand:</Text>
              <Text style={styles.productText}>{product.productQuantity}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>Total Quantity:</Text>
              <Text style={styles.productText}>{product.totalProductQuantity}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>Min Sale Price:</Text>
              <Text style={styles.productText}>{product.minSalePrice}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.productLabel}>More Information:</Text>
              <Text style={styles.productText}>{product.productDesc}</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={{flexDirection: "column"}}>

              <Text style={styles.productLabel}>Total Quantity: {quantity}</Text>
              <View style={{flexDirection: "row"}}>
              <Text style={styles.productLabel}>Price items  </Text>
              <Text style={styles.productText}> {price * quantity} AED</Text>
              </View>
              </View>
            <View style={styles.submitButtonContainer}>

              <CustomSubmitButton
                title="Place Order"
                onPress={handlesubmit}
              />
            </View>
            </View>
            {/* <Button title="place order" onPress={handlesubmit} /> */}
          </View>
        </ScrollView>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 17,
  },
  mobile: {
    fontSize: 15,
    marginHorizontal: 20,
  },
  addButtonContainer: {
    alignItems: "flex-end",
    padding: 20,
    marginVertical: 30
  },
  
  addbutton: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ffa600",
    borderRadius: 13,
  },
  submitbutton: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ffa600",
    borderRadius: 8,

  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "column"
  },
  product: {
    marginHorizontal: 25,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5
  },
  productHeaderLabel: {
    fontSize: 15,
    flexDirection: "row",
    fontWeight: "500"
  },

  productAvail: {
    flexDirection: 'row'
  },

  stockCheck: {
    color: "#ffa600",
    fontWeight: 'bold',
    fontSize: 15,
  },

  productfields: {
    fontSize: 15,
  },
  removeButtonText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 17,
  },
  quantityInput: {
    alignItems: "center"
  },
  removeContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  priceContainer: {
    borderColor: "black",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    width: 55,
    borderRadius: 5,
    flexDirection: "row"
  },
  columnContainer: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 15,
  },
  productLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "black"
  },
  productText: {
    marginRight: 30, 
    fontWeight: "500"
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 50, 
  }

});
