import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import ContactItem from "../contactitem";
import { baseUrl } from "../../api/const";


export default function Contacts({ navigation }) {
    const { fab } = styles;

    const contacturl = `${baseUrl}/viewCustomers`;
    const searchurl = `${contacturl}?name=`;

    const [names, setNames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredNames, setFilteredNames] = useState([]);

    useEffect(() => {
        axios.get(contacturl)
        .then((res) => {
            const namesArray = res.data.data.map((item) => ({
            name: item.name,
            customer_mobile: item.customer_mobile,
            _id: item._id,
            warehouse_id: item.warehouse_id,
            warehouse_name:item.warehouse_name,
            }));
            setNames(namesArray);
            setFilteredNames(namesArray);
        })
        .catch(err => console.log(err));

    }, []);

    useEffect(() => {
        
        if (searchQuery !== "") {
        axios.get(searchurl + searchQuery)
            .then((res) => {
            const filteredResults = res.data.data.map((item) => ({
                name: item.name,
                customer_mobile: item.customer_mobile,
                _id: item._id,
                
            }));
            setFilteredNames(filteredResults);
            })
            .catch(err => console.log(err));
        } else {
        setFilteredNames(names);
        }
    }, [searchQuery, names]);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
    };

    // console.log(names)

    return (
        <View>
        <StatusBar backgroundColor={"#ffa600"} />

        <Searchbar
            placeholder="Search contacts"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
            borderRadius: 0,
            borderWidth: 12,
            borderColor: '#ffa600',
            backgroundColor:"white",
            
            }}
        />

        <FlatList
            data={filteredNames}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ContactItem item={item} />}
        />

        <FAB
            style={fab}
            icon={() => <MaterialIcons name="contact-page" size={24} color="white" />}
            onPress={() => navigation.navigate('addcontacts')}
        />

        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 28,
        bottom: 350,
        backgroundColor: '#ffa600',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
