
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import AddTripScreen from '../Screens/AddTripScreen';
import AddExpeneseScreen from '../Screens/AddExpeneseScreen';

function NavigationFile() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
                <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen options={{headerShown: false}} name="AddTripScreen" component={AddTripScreen}/>
                <Stack.Screen options={{headerShown: false}} name="AddExpeneseScreen" component={AddExpeneseScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  // const styles = StyleSheet.create({
    
  // });
  
  export default NavigationFile;