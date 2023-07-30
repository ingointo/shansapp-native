import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default  function ContactDetails({route}){

    const {item}=route.params;

    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.mobile}>{item.customer_mobile}</Text>
            </View>
            <MaterialIcons name="smartphone" size={35} color="black" />
        </View>


        
    );
}

const styles=StyleSheet.create({
    container:{

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,

    },
    details:{
        

    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        margin:17,
    },

    mobile:{
        fontSize:15,
        marginHorizontal:20,
    }
});