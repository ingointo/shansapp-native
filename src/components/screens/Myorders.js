import React from "react"
import { View,StyleSheet,Text } from "react-native";


export default function MyOrdersScreen(){

    return(
        <View>
            <View style={styles.top} >
                <Text>Myorders</Text>
            </View>
        
                
            
        </View>
    );
}

const styles=StyleSheet.create({
    container:{

        flex:1,
        
    },

    top:{
        backgroundColor:"#ffa600",
        padding:15,
    },

    Text:{
        padding:25,
    },

});