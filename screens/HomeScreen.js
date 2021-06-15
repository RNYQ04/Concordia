import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/Icon';

//implement this after creating UserScreen.js
//import UserScreen from './UserScreen'



const Stack = createStackNavigator();
export default function HomeStack(){
    return (
        <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
            {/* Introduction */}
            <Text>Hello, </Text>
            <Image class="circle" src="./../assets/pfp.jpg" /*onPress={UserScreen} */ /> 
            <Text>James<br /></Text>  
    
            <Icon name="arrow-long-right" color="#000000" />
            <Text>Swipe Right to start</Text>
            
        </View>
    );
}

//I haven't tested the styles or whatever yet bcos im going crazy from how much vscode hates me i cant fricking run anything
const styles = StyleSheet.create({
    infoText: {
        fontFamily: 'Roboto',
    },
    profilePicture: {
        padding: 10,
        backgroundColor: "#E3E9F3",
        width: "50%",
        height: 40,
        margin: 10,
        borderRadius: 10,
    }
});