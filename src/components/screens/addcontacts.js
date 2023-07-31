import React from "react";
import { StyleSheet,Text,View,TextInput,Alert,Button } from "react-native";
import baseUrl from "../../api/const"
import { Formik } from "formik";
import { Picker } from "@react-native-community/picker";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";





export default function Addcontact(){
    const languageUrl='http://137.184.67.138:3004/viewLanguage/language_list/language_dropdown';
    const stateUrl='http://137.184.67.138:3004/viewState/state_list/state_drop_down';
    const areaUrl='http://137.184.67.138:3004/viewArea/area_list/drop_down';
    const countryUrl='http://137.184.67.138:3004/viewCountry/country_list/country_dropdown';
    const currencyUrl='http://137.184.67.138:3004/viewCurrency/currency_list/currency_dropdown';


    const[language,setLanguage]=useState([]);
    const[state,setState]=useState([]);
    const[area,setArea]=useState([]);
    const[country,setCountry]=useState([]);
    const[customerType, setCustomerType] = useState("");
    const[currency,setCurrency]=useState([]);
    const[customerTitle,setCustomerTitle]=useState("");

    useEffect(()=>{
        axios.get(languageUrl).then((res)=>{
            const langArray=res.data.data.map((item)=>({
                language_name:item.language_name,
                _id:item._id,
                language_code:item.language_code,
            }));
            setLanguage(langArray);
        }).catch(err=>console.log(err));

        axios.get(stateUrl).then((res)=>{
            const stateArray=res.data.data.map((item)=>({
                state_name:item.state_name,
                _id:item._id,
                
            }));
            setState(stateArray);
        }).catch(err=>console.log(err));

        axios.get(areaUrl).then((res)=>{
            const areaArray=res.data.data.map((item)=>({
                area_name:item.area_name,
                _id:item._id,
                
            }));
            setArea(areaArray);
        }).catch(err=>console.log(err));

        axios.get(countryUrl).then((res)=>{
            const countryArray=res.data.data.map((item)=>({
                country_name:item.country_name,
                _id:item._id,
                
            }));
            setCountry(countryArray);
        }).catch(err=>console.log(err));

        axios.get(currencyUrl).then((res)=>{
            const currencyArray=res.data.data.map((item)=>({
                currency_name:item.currency_name,
                _id:item._id,
                
            }));
            setCurrency(currencyArray);
        }).catch(err=>console.log(err));
    },[])

    

    // console.log(country);
    
    return(
        <Formik
        initialValues={{name:'',customer_mobile:'',customer_email:'',whatsapp_no:'',
        language_id:'',country_id:'',state_id:'',currency_id:'',area_id:'',address:'',
        customer_title:'',trn_no:'',image_url:'',customer_type:''
    }}
    onSubmit={values=>console.log(values)}
    >



        {(props)=>(
            <View>
                <View style={styles.form}>
                    <TextInput
                            style={styles.input}
                            placeholder="customer Name"
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            />
                    <TextInput
                            style={styles.input}
                            placeholder="Mobile"
                            onChangeText={props.handleChange('customer_mobile')}
                            keyboardType="numeric"
                            value={props.values.customer_mobile}
                            />
                    <TextInput
                            style={styles.input}
                            placeholder="Whatsapp Number"
                            onChangeText={props.handleChange('whatsapp_no')}
                            keyboardType="numeric"
                            value={props.values.whatsapp_no}
                            />
                    <TextInput
                            style={styles.input}
                            placeholder="Address"
                            onChangeText={props.handleChange('address')}
                            value={props.values.address}
                            />
                    <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={props.handleChange('customer_email')}
                            value={props.values.customer_email}
                            />
                    <TextInput
                            style={styles.input}
                            placeholder="TRN"
                            onChangeText={props.handleChange('trn_no')}
                            keyboardType="numeric"
                            value={props.values.trn_no}
                            />
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select language"
                        onValueChange={props.handleChange('language_id')}
                        selectedValue={props.values.language_id}
                    >
                        {language.map((item)=>{
                            return (
                                <Picker.Item
                                    label={item.language_name.toString()}
                                    value={item._id}
                                    key={item._id}
                                />
                            )
                        })}

                        
                    </Picker>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select State"
                        onValueChange={props.handleChange('state_id')}
                        selectedValue={props.values.state_id}
                    >
                        {state.map((item)=>{
                            return (
                                <Picker.Item
                                    label={item.state_name.toString()}
                                    value={item._id}
                                    key={item._id}
                                />
                            )
                        })}

                        
                    </Picker>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select Area"
                        onValueChange={props.handleChange('area_id')}
                        selectedValue={props.values.area_id}
                    >
                        {area.map((item)=>{
                            return (
                                <Picker.Item
                                    label={item.area_name.toString()}
                                    value={item._id}
                                    key={item._id}
                                />
                            )
                        })}

                        
                    </Picker>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select Country"
                        onValueChange={props.handleChange('country_id')}
                        selectedValue={props.values.country_id}
                    >
                        {country.map((item)=>{
                            return (
                                <Picker.Item
                                    label={item.country_name.toString()}
                                    value={item._id}
                                    key={item._id}
                                />
                            )
                        })}

                        
                    </Picker>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select Currency"
                        onValueChange={props.handleChange('currency_id')}
                        selectedValue={props.values.currency_id}
                    >
                        {currency.map((item)=>{
                            return (
                                <Picker.Item
                                    label={item.currency_name.toString()}
                                    value={item._id}
                                    key={item._id}
                                />
                            )
                        })}

                        
                    </Picker>

                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select Customer Type"
                        onValueChange={(itemValue)=>{
                            props.setFieldValue('customer_type', itemValue);
                            setCustomerType(itemValue)}}
                        selectedValue={props.values.customer_type}
                    >
                        <Picker.Item label="B2B" value="b2b"/>
                        <Picker.Item label="B2C" value="b2c"/>

                    </Picker>
                    <Picker
                        enabled={true}
                        mode="dropdown"
                        placeholder="Select Customer Title"
                        onValueChange={(itemValue)=>{
                            props.setFieldValue('customer_title', itemValue);
                            setCustomerTitle(itemValue)}}
                        selectedValue={props.values.customer_title}
                    >
                        <Picker.Item label="M/s" value="M/s"/>
                        <Picker.Item label="Mr" value="Mr"/>
                        <Picker.Item label="Ms" value="Ms"/>

                    </Picker>

                </View>
                <Button title="Submit" mode="contain" onPress={props.handleSubmit}/>
            </View>
        )}
            
        </Formik>
    
    );

    
}

const styles=StyleSheet.create({

    form:{
        marginVertical:20,
    },

    input:{
        borderWidth:1,
        borderColor:"#ddd",
        padding: 10,
        fontSize:18,
        borderRadius:6,
    },


});