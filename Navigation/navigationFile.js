import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import {auth} from '../config/Firebase';
import LandingScreen from '../Screens/LandingScreen';
import AddTripScreen from '../Screens/AddTripScreen';
import AddExpeneseScreen from '../Screens/AddExpeneseScreen';
import TripExpeneseScreen from '../Screens/TripExpeneseScreen';
import LogInScreen from '../Screens/LoginInScreen';
import SignInScreen from '../Screens/SignInScreen';
import {useSelector, useDispatch} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {setUser} from '../Redux/slice/user';
const Stack = createNativeStackNavigator();

function NavigationFile() {
  const user = useSelector(state => state.user.user);
  console.log('got email', user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, u => {
    console.log('got', u);
    dispatch(setUser(u));
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddTripScreen"
            component={AddTripScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddExpeneseScreen"
            component={AddExpeneseScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="TripExpeneseScreen"
            component={TripExpeneseScreen}
          />
          {/* <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="LogInScreen"
            component={LogInScreen}
          />
          <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="SignInScreen"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LandingScreen"
            component={LandingScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
        {/* <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddTripScreen"
            component={AddTripScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddExpeneseScreen"
            component={AddExpeneseScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="TripExpeneseScreen"
            component={TripExpeneseScreen}
          /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="LogInScreen"
            component={LogInScreen}
          />
          <Stack.Screen
            options={{headerShown: false, presentation: 'modal'}}
            name="SignInScreen"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LandingScreen"
            component={LandingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({

// });

export default NavigationFile;
