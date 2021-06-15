import React from 'react'
import  { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function EventsScreen({ navigation }) {
  return (
    <View style={styles.container} style={{padding: 30, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#B0E0E6" }}>
      <Text style={{marginLeft: 50, marginLeft: 1}} >Hi, VanessaMae!</Text>
      <Image source={require("./../assets/profile.jpg")} style={{height: 150, width: 150, borderRadius: 75, margin: 20}} />
      <Text style={{marginLeft: 100, marginLeft: 1}} >Email: vanessamae@gmail.com</Text>
      <Text style={{margin: 10, marginLeft: 1}} >Buddies: Vincent1001, RyanNg2004</Text>
      <TouchableOpacity style={styles.buttonBox}><Text style={styles.infoText}>Change Password</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("EventsSecondScreen")}><Text style={styles.infoText}>Help</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("EventsSecondScreen")}><Text style={styles.infoText}>Sign Out</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontFamily: "Roboto",
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#C0C0C0",
    width: 200,
    height: 40,
    margin: 10,
    fontSize: "20",
  },
  container: {
    backgroundColor: "black",
    borderColor: "lightgray",
  }
});

function EventsSecondScreen() {
  return (
    <Text>Lol</Text>
  )
}

const Stack = createStackNavigator();
export default function EventsStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="User Profile" component={EventsScreen}/>
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen}/>
    </Stack.Navigator>
  )
}