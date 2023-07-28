import React from 'react';
import { View, Text, Keyboard, StyleSheet, Image, Alert } from 'react-native'; // 1. Import AsyncStorage
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import Button from '../Button';
import Input from '../Input';
import Loader from '../Loader';
import { baseUrl } from '../../api/const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const LoginScreen = ({ navigation }) => {
  // destructuring Styles
  const { container, tinyLogo, imageContainer } = styles;

  const [inputs, setInputs] = React.useState({ user_name: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.user_name) {
      handleError('Please input user name', 'user_name');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      try {
        const response = await axios.post(`${baseUrl}/viewuser/login`, {
          user_name: inputs.user_name,
          password: inputs.password,
        });
        // console.log('Server Response:', response.data); // Log the server response
        if (response.data.success === "true") {
          const userData = response.data.data[0]; // Access the first user object in the 'data' array
          // console.log('User Input:', inputs); // Log the user input
          // console.log('User Data:', userData); // Log the user data received from the server
          if (
            inputs.user_name === userData.user_name &&
            inputs.password === userData.password
          ) {
            navigation.navigate('Drawer');
            AsyncStorage.setItem(
              'userData',
              JSON.stringify({ ...userData, loggedIn: true }),
            );
          } else {
            Alert.alert('Error', 'Invalid Details');
          }
        } else {
          Alert.alert('Error', 'User does not exist');
        }
      } catch (error) {
        console.error('Axios Error:', error)
        Alert.alert('Error', 'An error occurred while logging in');
      }
    }, 3000);
  };


  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={container}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <View style={imageContainer}>
          <Image style={tinyLogo} source={require('../../../assets/splash.png')} />
        </View>
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
          Shan's App login
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, 'user_name')}
            onFocus={() => handleError(null, 'user_name')}
            iconName="account-outline"
            label="User Name"
            placeholder="Enter your user name"
            error={errors.user_name}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Log In" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have an account? Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    alignItems: 'center', // Center horizontally
    marginBottom: 20,
  },
});

export default LoginScreen;
