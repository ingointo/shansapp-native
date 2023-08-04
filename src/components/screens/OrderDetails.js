import React, { useEffect, useState } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../api/const";

const invoiceUrl = `${baseUrl}/viewInvoice/`;

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

const OrderDetails = () => {

    const [ invoice, setInvoice]  = useState({})
    const route = useRoute(); // or use parathesis passing prop
    const id = route.params.item.id;

    useEffect(() => {
        axios.get(invoiceUrl + id).then((res) => {
            const invoiceDetails = res.data.data[0].map((item) => ({
                id: item._id,
                sequenceNum: item.sequence_no,
                paymentDate: item.date,
                invoiceStatus: item.invoice_status,
                paidAmount: item.paid_amount,
                productName: item.product_name,
                date: item.date,
                total: item.total_amount,
                customerName: item.customer_name,
                warehouseName: item.warehouses_name
            }));
            console.log("Order Details component ------------------", invoiceDetails);
            setInvoice(invoiceDetails)
        });
    }, []);

    console.log("Invoice details ----------", invoice)
    const navigation = useNavigation();
    return (
        <>
            <CustomButton title="Invoice Details" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Sequence Number</Text>
                
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Product Name:</Text>
                    <Text style={styles.text}>{invoice.productName}</Text>
                </View>

                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Date & Time:</Text>
                    <Text style={styles.text}>{invoice.date}</Text>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Total Amount:</Text>
                    <Text style={styles.text}>{invoice.total}</Text>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Status:</Text>
                    <Text style={styles.text}>{invoice.invoiceStatus}</Text>
                </View>
                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Customer Name:</Text>
                    <Text style={styles.text}>{invoice.customerName}</Text>
                </View>

                <View style={styles.columnContainer}>
                    <Text style={styles.label}>Warehouse Name:</Text>
                    <Text style={styles.text}>{invoice.warehouseName}</Text>
                </View>

            </View>
        </>
    );
};

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
        color: "white",
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
    },
    columnContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default OrderDetails;
