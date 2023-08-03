import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

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
  const { item } = route.params;

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
          onPress={() => navigation.navigate('ContactDetails', { item: item })}
        />
      </View>
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
  }
});
