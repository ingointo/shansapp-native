import React, { useState , useEffect } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback,TextInput,Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";


const CustomAddButton = ({ title, onPress }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.addbutton}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};




export default function ContactDetails({ route, navigation }) {
  const { item, product } = route.params;

  console.log("Product in contact detail ", product);

  const[products,setProducts]=useState([]);
  const [quantity, setQuantity] = useState(""); 
  const [price, setPrice] = useState("");
  const total=price*quantity

  useEffect(() => {
    // On initial load, set the products from route params
    if (product) {
      setProducts([product]);
    }
  }, [product]);

  const handleAddToProducts = () => {
    if (product && !products.some((prod) => prod.productName === product.productName)) {
      const productWithDetails = { ...product, quantity: Number(quantity), price: Number(price) }; // Add quantity and price to the product object
      setProducts((prevProducts) => [...prevProducts, productWithDetails]);
      setQuantity(""); // Clear the quantity input after adding the product
      setPrice(""); 
    }
  };

  const RemoveButton = ({ productName }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleRemoveFromProducts(productName)}>
        <View style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const handleRemoveFromProducts = (productNameToRemove) => {
    // Use the setProducts function to update the state with a new array that excludes the product to be removed.
    setProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.productName !== productNameToRemove)
    );
  };
const date=new Date();
  function  handlesubmit(){
    axios.post('http://137.184.67.138:3004/createCombinedInvoicePaymentReceived',{

    
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
              "total": total,
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
  
    }).then(res=>{
      console.log(res);
      console.log("success");
    }).catch(err=>console.log(err))
  }
  
  console.log("products list",products)

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.rowContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.mobile}>{item.customer_mobile}</Text>
        </View>

        <View style={styles.iconRow}>
          <MaterialIcons name="smartphone" size={35} color="black" />
        </View>
      </View>
      <View style={styles.addButtonContainer}>
        <CustomAddButton
          title="Add Products"
          onPress={() => {navigation.navigate('ProductScreen', { contact: item });handleAddToProducts();}}
        />
      </View>

      {/* Check if product is available */}
      {product && products.some((prod) => prod.productName === product.productName) && (
        <View style={styles.product}>
          <Text style={styles.producttitle}>{product.productName}</Text>
          <View style={styles.productAvail}>
            <Text style={styles.productfields}>Availability:</Text>
            <Text style={styles.stock}>In Stock</Text>
          </View>
          <View>
            
              <TextInput
                style={styles.quantityInput}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="Enter quantity"
                keyboardType="numeric"
            />

          </View>

          <View>
          <Text>Price:</Text>
            <TextInput
              style={styles.priceInput}
              value={price}
              onChangeText={setPrice}
              placeholder="Enter price"
              keyboardType="numeric"
            />

          </View>

          <Text>Product category: {product.productCategory}</Text>
          <Text>On Hand: {product.productQuantity}</Text>
          <Text>Total Quantity: {product.totalProductQuantity}</Text>
          <Text>Total price:{price*quantity}</Text>
          <RemoveButton productName={product.productName} />
          <Button title="place order" onPress={handlesubmit}/>
        </View>
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
    alignItems: "center"
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
    marginVertical: 50
  },
  addbutton: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ffa600",
    borderRadius: 13,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "column"
  },
  iconRow: {
    marginLeft: 200
  },
  product:{
    margin:10,
  },
  producttitle:{
    fontSize:18,
    alignSelf:'center',
  },

  productAvail:{
    flexDirection:'row'
  },

  stock:{
    color:"#ffa600",
    fontWeight:'bold',
    fontSize:15,
  },

  productfields:{
    fontSize:15,
    },

  removeButtonText:{
    color:'red',
    fontWeight:'600',
    fontSize:17,
  },

  
  
});
