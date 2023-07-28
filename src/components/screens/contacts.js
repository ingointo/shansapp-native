import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import ContactItem from "../contactitem";

export default function Contacts({ navigation }) {
    const { fab } = styles;

    const contacturl = 'http://137.184.67.138:3004/viewAllContacts';
    const searchurl = 'http://137.184.67.138:3004/viewAllContacts?name=';

    const [names, setNames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredNames, setFilteredNames] = useState([]);

    useEffect(() => {
        axios.get(contacturl)
        .then((res) => {
            const namesArray = res.data.data.map((item) => ({
            name: item.name,
            mobile: item.mobile,
            _id: item._id,
            }));
            setNames(namesArray);
            setFilteredNames(namesArray);
        })
        .catch(err => console.log(err));

    }, []);

    useEffect(() => {
        // Filter the names based on the search query
        if (searchQuery) {
        axios.get(searchurl + searchQuery)
            .then((res) => {
            const filteredResults = res.data.data.map((item) => ({
                name: item.name,
                mobile: item.mobile,
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
        bottom: 200,
        backgroundColor: '#ffa600',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
