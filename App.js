import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
import MenuScreen from './screens/Menu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{ 
      // headerShown: false 
      }}>
      <Drawer.Screen name="Profile" component={UserScreen} />
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="My Cart" component={CartScreen} />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} />
      <Drawer.Screen name="Order" component={CheckoutScreen} />
      {/* <Drawer.Screen name="Notification" component={}/> */}

    </Drawer.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={
      ({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let colorIcon;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            colorIcon = focused ? 'rgba(41, 166, 211, 1)' : '#444';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
            colorIcon = focused ? 'rgba(41, 166, 211, 1)' : '#444';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            colorIcon = focused ? 'rgba(41, 166, 211, 1)' : '#444';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            colorIcon = focused ? 'rgba(41, 166, 211, 1)' : '#444';
          }
          return <Ionicons name={iconName} size={20} color={colorIcon} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'rgba(41, 166, 211, 1)',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={MainScreen} options={{
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
      }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarLabel: 'My Cart'
      }} />
      <Tab.Screen name="Profile" component={UserScreen} options={{
      }} />
    </Tab.Navigator>
  );
}

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Slide" component={SlideScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Menu/> */}
      <Stacks />
    </NavigationContainer>
  );
}