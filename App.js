import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ContactsScreen from './screens/ContactsScreen';
import LockScreen from './screens/LockScreen';
import UserScreen from './screens/test';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    HomeScreen,
    (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            DrawerBarIcon: ({ focused, color, size }) => {
              let iconName;
              color='cyan'
              //Set the icon based on which route it is (name of the Drawer)
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'E-Exam') {
                iconName = 'list';
              } else if (route.name === 'Chat') {
                iconName = 'wechat';
              } else if (route.name === 'Study') {
                iconName = 'book';
              } else if (route.name === 'User') {
                if (focused) {
                  iconName = 'user-circle';
                } else {
                  iconName = 'user-circle-o';
                }
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
          DrawerBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Chat" component={ContactsScreen} />
          <Drawer.Screen name="Study" component={LockScreen} />
          <Drawer.Screen name="E-Exam" component={EventsScreen} />
          <Drawer.Screen name="User" component={UserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  );
}