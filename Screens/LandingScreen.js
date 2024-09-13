/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import ScreenWarpper from '../component/screenWarpper';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';




function LandingScreen() {
  const navigate = useNavigation();

  return (
   <ScreenWarpper> 
    <ScrollView>
        <View className="mt-4 flex-row">
          <Image source={require('../assests/images/welcome.gif')} className="w-96 h-96 shadow mt-10"/>
        </View>
        <View className="mx-5">
          <Text style={{fontSize:28,fontWeight:'bold',color:'black',textAlign:'center',}} >Expensify</Text>
          <TouchableOpacity onPress={() => navigate.navigate('SignInScreen')} className="shaodw p-3 rounded-full mb-5 my-2" style={{backgroundColor:colors.button}}>
            <Text className="text-center font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate.navigate('LogInScreen')} className="shaodw p-3 rounded-full mt-5" style={{backgroundColor:colors.button}}>
            <Text className="text-center font-bold text-lg">Log In</Text>
          </TouchableOpacity>
         
        </View>
    </ScrollView>
   </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  // className="text-center font-bold text-4xl mb-7 text-black-500"
// });

export default LandingScreen;
