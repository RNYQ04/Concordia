import React,{useEffect, useState}from 'react'
import  { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var monthNames = [ "January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December" ];



function Schedule({ navigation }) {
  return (
    <View style={styles.container} style={{padding: 30, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#B0E0E6" }}>
      <Text style={{fontSize: 30, fontWeight: "bold", marginBottom: 40}} >Study Schedule</Text>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Self-study")}><Text style={styles.infoText}>Self-study</Text></TouchableOpacity>

    </View>
  );
}

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
  buttonBelow: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E3E9F3",
    width: "90%",
    height: 40,
    margin: 10,
    fontSize: "20",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

function ContactsFirstScreen({navigation}) {
  return (
  <ScrollView>
    <Text style={{padding: 20, textAlign: "center", fontSize: 30, fontWeight: "bold", backgroundColor: "red", color: "white"}}>Focused Mode will automatically turn on at 1 pm today!</Text>
    <Card>
      <Card.Title>{date} {monthNames[month]}, {year}</Card.Title>
      <Card.Divider/>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        <Text style={{marginBottom: 10, fontSize: 30}}>
          1300 - 1400 | Review for AP GP
          </Text>
        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Learn")}><Text style={styles.infoText}>Start Now</Text></TouchableOpacity>
      </View>
    </Card>
    <Card>
      <Card.Title>{date+1} {monthNames[month]}, {year}</Card.Title>
      <Card.Divider/>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        <Text style={{marginBottom: 10, fontSize: 30}}>
          1300 - 1400 | Review for Chemistry Atomic Structure
          </Text>
        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Timer")}><Text style={styles.infoText}>Start Now</Text></TouchableOpacity>
      </View>
    </Card>
    <Card>
      <Card.Title>{date+2} {monthNames[month]}, {year}</Card.Title>
      <Card.Divider/>
      <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        <Text style={{marginBottom: 10, fontSize: 30}}>
          1400 - 1500 | Review for Binomial Expansion
          </Text>
        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Timer")}><Text style={styles.infoText}>Start Now</Text></TouchableOpacity>
      </View>
    </Card>

    <View style={{alignItems: "center"}}>
      <TouchableOpacity style={styles.buttonBelow} onPress={() => navigation.navigate("Welp")}><Text style={styles.infoText}>Schedule More Ahead</Text></TouchableOpacity>
    </View>
  </ScrollView>
  )
}

function Scheduled({navigation}) {
  const timeInitial = new Date().getTime()
  const [time, setTime] = useState('3600000')
  function showTime(){
    var timeNow = new Date().getTime()
    timeNow = timeNow - timeInitial
    timeNow = time - timeNow
    setTime(timeNow)
  }
  useEffect(()=>{
    const interval = setInterval(showTime, 1000);
    return()=> clearInterval(interval)
  }, []); 
  var timeInHours = Math.floor(time/3600000)
  var timeInMinutes = Math.floor((time%3600000)/60000)
  var timeInSeconds = Math.floor((time%60000)/1000)
  return(
    <View style={{justifyContent:"center", alignContent:"center"}}>
      <Text style={{fontSize: 30, justifyContent:"center", alignContent:"center"}}>
        Hours:{timeInHours} {"\n"}
        Minutes: {timeInMinutes} {"\n"}
        Seconds: {timeInSeconds} {"\n"}
      </Text>
    </View>
  )
}





const Stack = createStackNavigator();
export default function ContactsStack() {
  
  return(
    <Stack.Navigator>
      <Stack.Screen name="User Profile" component={Schedule}/>
      <Stack.Screen name="Self-study" component={ContactsFirstScreen}/>
      <Stack.Screen name="Timer" component={Scheduled} options={{
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => {
              alert("Don't give up!")
            }}
          />
        ),
      }} />
    </Stack.Navigator>
  )
}