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
import DetailScreen from './screens/Detail';
import CartScreen from './screens/Cart';
import CheckoutScreen from './screens/Checkout';
import FavoriteScreen from './screens/Favorite';
import UserScreen from './screens/User';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen}/>
        <Stack.Screen name="Slide" component={SlideScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Collection" component={Collection}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Checkout" component={CheckoutScreen}/>
        <Stack.Screen name="Favorite" component={FavoriteScreen}/>
        <Stack.Screen name="User" component={UserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}