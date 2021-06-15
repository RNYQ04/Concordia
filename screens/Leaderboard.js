  
import React from 'react'
import  { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  infoText: {
    fontFamily: 'Roboto',
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E3E9F3",
    width: 200,
    height: 40,
    margin: 10,
    fontSize: "20",
    borderRadius: 10,
  },
  buttonGS: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E3E9F3",
    width: "50%",
    height: 40,
    margin: 10,
    fontSize: "20",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
  box: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default function HomeScreen() {
    return (
        <ScrollView>
          <View style={{alignItems: "center", resizeMode: "cover", margin: 10}}>
            <Image  style={{width: "100%", height: 400, alignContent: "center"}} source={require('./../assets/gold.png')} />
            <Text >Congratulations! You are in the Bronze league</Text>
          </View>
      
          <Card>
            <Card.Title>Gold League</Card.Title>
            <Card.Divider/>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>Vanessa Mae</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 100</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>RyanNg2004</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 95</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>Lucas</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 90</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
      
          </Card>
          <Card>
            <Card.Title>Silver League</Card.Title>
            <Card.Divider/>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>Mady</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 77</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>Prithika</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 76</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
            <Card style={{justifyContent: "flex-start", display: "flex", flexDirection:"row", position: "relative"}} >
              <Text style={{alignSelf: "flex-end"}}>Paul</Text>
              <Text style={{alignSelf: "flex-end"}}>Points : 70</Text>
              <Image source={require("./../assets/profile.jpg")} style={{height: 50, width: 50, borderRadius: 25}} />
            </Card>
      
          </Card>
          
      
        </ScrollView>
        )
      };