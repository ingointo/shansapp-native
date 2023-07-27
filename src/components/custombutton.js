import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal:25,
    paddingVertical:6,
    borderRadius: 5,
    
  },
  buttonText: {
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;