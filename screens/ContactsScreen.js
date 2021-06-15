import React from 'react'
import  { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';

function ContactsScreen({ navigation }) {
  return (
    <View style={styles.container} style={{padding: 30, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#B0E0E6" }}>
      <Text style={{fontSize: 30, fontWeight: "bold", marginBottom: 40}} >Activity Menu</Text>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Self-study")}><Text style={styles.infoText}>Self-study</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Group Study")}><Text style={styles.infoText}>Group Study</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Quiz")}><Text style={styles.infoText}>Quiz</Text></TouchableOpacity>

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
  }
});

function ContactsFirstScreen() {
  return (
  <ScrollView>
    <Card>
      <Card.Title>H2 Maths - Sequence and Series Review</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('./../assets/maths.jpg')}>
      </Card.Image>
      <Text style={{marginBottom: 10}}>
        Let's review on our understanding about AP and GP!
        </Text>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Learn")}><Text style={styles.infoText}>Learn Now</Text></TouchableOpacity>

    </Card>
    <Card>
      <Card.Title>H2 Chemistry - Transition Elements</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('./../assets/chem.jpg')}>
      </Card.Image>
      <Text style={{marginBottom: 10}}>
        Let's review on our understanding about Transition elements!
        </Text>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Learn")}><Text style={styles.infoText}>Learn Now</Text></TouchableOpacity>

    </Card>
    <Card>
      <Card.Title>Secondary 3 - Emaths Vectors</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('./../assets/maths.jpg')}>
      </Card.Image>
      <Text style={{marginBottom: 10}}>
        Let's review on our understanding about vectors!
      </Text>
      <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Learn")}><Text style={styles.infoText}>Learn Now</Text></TouchableOpacity>
    </Card>

  </ScrollView>
  )
}

function ContactsSecondScreen() {
  return (
    
      <ScrollView>
      <View style = {{alignItems: "center"}}>
        <Text style={{fontSize: 20, alignItems:"center", padding: 20}}>Welcome to the Virtual Classroom. Here are the available teachers! Do message them for help and kindly introduce yourself first!</Text>
      </View>
      <View style = {styles.container}>
          <Card
              image={{uri:('https://www.mrmunro.co.uk/wp-content/uploads/2018/08/Cavani-Tommy-Three-Piece-Suit-Worn.jpg')}} style ={styles.item}>
              <Image source={require("./../assets/profile.jpg")} style={{height: 150, width: 150, borderRadius: 75, marginBottom: 30}} />
              <Text style={{marginBottom: 10, fontFamily: 'sans-serif', fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
                  Mr James Lee
              </Text>
              <Text>
                  H2 Physics Teacher
              </Text>
              <Text>Status: Offline</Text>
              <View style={{width: '70%', flexDirection: 'row', justifyContent:'left', alignItems: 'left'}}>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Call")}><Text style={styles.infoText}>Message</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Zoom")}><Text style={styles.infoText}>Meet</Text></TouchableOpacity>
              </View>          
              </Card>
          <Card
              image={{uri:('https://simages.ericdress.com/Upload/Image/2018/14/watermark/99e027f5-1e4f-4b77-93d2-827e0c2db2e7.jpg')}} style ={styles.item}>
              <Image source={require("./../assets/profile.jpg")} style={{height: 150, width: 150, borderRadius: 75, marginBottom: 30}} />
              <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
                  Mr Adrian Goh
              </Text>
              <Text>
                  H2 Maths Teacher
              </Text>
              <Text>Status: Online</Text>
              <View style={{width: '70%', flexDirection: 'row', justifyContent:'left', alignItems: 'left'}}>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Call")}><Text style={styles.infoText}>Message</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Zoom")}><Text style={styles.infoText}>Meet</Text></TouchableOpacity>
              </View>
          </Card>
          <Card
              image={{uri:('https://simages.ericdress.com/Upload/Image/2018/14/watermark/99e027f5-1e4f-4b77-93d2-827e0c2db2e7.jpg')}} style ={styles.item}>
              <Image source={require("./../assets/profile.jpg")} style={{height: 150, width: 150, borderRadius: 75, marginBottom: 30}} />
              <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
                  Mrs Poh Jiao Mei
              </Text>
              <Text>H2 Chemistry Teacher</Text>
              <Text>Status: Online</Text>
              <View style={{width: '70%', flexDirection: 'row', justifyContent:'left', alignItems: 'left'}}>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Call")}><Text style={styles.infoText}>Message</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Zoom")}><Text style={styles.infoText}>Meet</Text></TouchableOpacity>
              </View>
          </Card>
          <Card
              image={{uri:('https://www.mrmunro.co.uk/wp-content/uploads/2018/08/Cavani-Tommy-Three-Piece-Suit-Worn.jpg')}} style ={styles.item}>
              <Image source={require("./../assets/profile.jpg")} style={{height: 150, width: 150, borderRadius: 75, marginBottom: 30}} />
              <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
                  Mrs Emily Loh 
              </Text>
              <Text>
                  H1 Maths Teacher
              </Text>
              <View style={{width: '70%', flexDirection: 'row', justifyContent:'left', alignItems: 'left'}}>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Call")}><Text style={styles.infoText}>Message</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonGS} onPress={() => navigation.navigate("Zoom")}><Text style={styles.infoText}>Meet</Text></TouchableOpacity>
              </View>
          </Card>
          </View>
          <View style={{marginTop: 30}} style = {{alignItems: "center"}}>
            <Text style={{fontSize: 20, alignItems:"center", padding: 20}}>Welcome to the Virtual Library. Let's leverage on the power of peer pressure</Text>
          </View>
          <View style = {styles.container}>
          <Card
              image={{uri:('https://www.mrmunro.co.uk/wp-content/uploads/2018/08/Cavani-Tommy-Three-Piece-Suit-Worn.jpg')}} style ={styles.item}>
              <Text style={{marginBottom: 10, fontWeight:"bold", flexDirection:'row', justifyContent:'flex-start'}}>
                  Group : Study Group 101. 
              </Text>
              <Text>
                  You are welcomed.. Come here, we can be friends!!!
              </Text>
              <View style={{width: '70%', flexDirection: 'row', justifyContent:'left', alignItems: 'left'}}>
                <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Join")}><Text style={styles.infoText}>Join Study Group</Text></TouchableOpacity>
              </View>
          </Card>
          <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Make New Study Group")}><Text style={styles.infoText}>Make Your Study Group</Text></TouchableOpacity>

          </View>
      </ScrollView>
  )
}

function ContactsThirdScreen() {
  return (
    <Card>
    <Card.Title>H2 Maths - Sequence and Series Quiz</Card.Title>
    <Card.Divider/>
    <Card.Image source={require('./../assets/maths.jpg')}>
    </Card.Image>
    <Text style={{marginBottom: 10}}>
    In this question, students are tested on their understanding of mainly Arithmetic Progression and Geometric Progression
      </Text>
  </Card>
  )
}


const Stack = createStackNavigator();
export default function ContactsStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="User Profile" component={ContactsScreen}/>
      <Stack.Screen name="Self-study" component={ContactsFirstScreen}/>
      <Stack.Screen name="Group Study" component={ContactsSecondScreen}/>
      <Stack.Screen name="Quiz" component={ContactsThirdScreen}/>
    </Stack.Navigator>
  )
}