import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/Landing';
import SlideScreen from './screens/Slide';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import MainScreen from './screens/Main';
import Collection from './screens/Collection';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen}/>
        <Stack.Screen name="Slide" component={SlideScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Collection" component={Collection}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}