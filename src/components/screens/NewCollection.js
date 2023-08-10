import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-community/picker";
import { useNavigation, useRoute } from '@react-navigation/native';


const CustomButton = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={[styles.buttonContainer]} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const CustomSubmitButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={[styles.submitButtonContainer]} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const NewCollection = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const [collectionType, setCollectionType] = useState('');
    // const [selectedCustomer, setSelectedCustomer] = useState('');

    const scannedData = route.params?.scannedData;

    const fetchCustomerDetails = async () => {
        try {
            const response = await axios.get(`http://137.184.67.138:3016/viewInvoice?sequence_no=${scannedData}`);
            const customerData = response.data; // Assuming the response contains the customer details
            console.log(customerData);
            // setCustomerName(customerData.customer_name);
        } catch (error) {
            console.error('Error fetching customer details:', error);
        }
    };

    useEffect(() => {
        fetchCustomerDetails()
    })

    console.log("scannedData-----------", scannedData)

    return (
        <ScrollView>

            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Date:</Text>
                    <TextInput
                        style={styles.input}
                        editable={false}
                    />
                    <Text style={styles.label}>Sales Person:</Text>
                    <TextInput
                        style={styles.input}
                        editable={false}
                    />
                    <Text style={styles.label}>Shop:</Text>
                    <TextInput
                        style={styles.input}
                        editable={false}
                    />
                    <Text style={styles.label}>Company:</Text>
                    <TextInput
                        style={styles.input}
                        editable={false}
                    />
                    <Text style={styles.label}>Collection Type:</Text>
                </View>
                <View style={styles.dropdown}>

                    <Picker
                        collectionType={collectionType}
                        onValueChange={(itemValue, itemIndex) => setCollectionType(itemValue)}
                    >
                        <Picker.Item label="Select a collection type" value="" />
                        <Picker.Item label="Option 1" value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>
                <View style={styles.customerBorder}>
                    <View style={styles.customerContent}>
                        <Text style={styles.label}>Customer: </Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            placeholder='Enter Customer Name'
                        />
                        <Text style={styles.label}>Invoice Number :</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            placeholder='Enter Invoice No'
                        />
                        <Text style={styles.label}>AMT :</Text>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            placeholder='Enter Total Amount'
                        />
                        <View style={styles.customerBottom}>
                            <Text style={styles.qrLabel}>Update from Qr code?</Text>
                            <CustomButton title="Scan" onPress={() => navigation.navigate('Scanner')} />
                        </View>
                    </View>

                </View>
                <Text style={styles.label}>Remarks :</Text>
                <TextInput
                    style={styles.inputRemarks}
                    editable={false}
                    placeholder='Enter Remarks'
                />
                {/* <Text style={styles.selectedValue}>Selected Value: {selectedValue}</Text> */}

                <Text style={styles.label}>Customer/Vendor Signature</Text>
                <View style={styles.signatureContainer}>
                    {/* signature  */}
                </View>
                <CustomSubmitButton title="Submit" />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
    },
    label: {
        color: "#ffa600",
        fontWeight: "bold",
        fontSize: 13,
        marginBottom: 2,
        marginTop: 3
    },
    input: {
        borderWidth: 0.9,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 18,
        borderRadius: 6,
        fontSize: 13,

    },
    dropdown: {
        borderWidth: 0.9,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 18,
        borderRadius: 6,

    },
    customerBorder: {
        marginTop: 15,
        borderWidth: 1.5,
        borderRadius: 6,
        borderColor: "#ffa600",
        marginVertical: 10
    },
    customerContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "sans-serif-medium",
        letterSpacing: 0.7
    },
    buttonContainer: {
        height: 30,
        paddingHorizontal: 19,
        justifyContent: "center",
        backgroundColor: "#fac02e",
        borderRadius: 2,
    },
    submitButtonContainer: {
        height: 40,
        paddingHorizontal: 19,
        justifyContent: "center",
        backgroundColor: "#fac02e",
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 10,
        alignItems: "center"
    },
    customerBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    qrLabel: {
        color: "#ffa600",
        fontWeight: "bold",
        fontSize: 13,
        marginBottom: 2,
        marginVertical: 30
    },
    inputRemarks: {
        borderWidth: 0.9,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 30,
        fontSize: 18,
        borderRadius: 6,
        fontSize: 13,
    },
    signatureContainer: {
        borderWidth: 0.9,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 100,
        fontSize: 18,
        borderRadius: 6,
        fontSize: 13,
    }
})

export default NewCollection