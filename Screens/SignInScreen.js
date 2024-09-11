/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native';

import ScreenWarpper from '../component/screenWarpper';
import { colors } from '../theme';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '../config/Firebase';
import BackButton from '../component/BackButton';
// import { Image } from 'react-native-svg';
import {ChevronLeftIcon} from 'react-native-heroicons/outline'

import { useNavigation } from '@react-navigation/native';
import { async } from '@angular/core/testing';
import Snackbar from 'react-native-snackbar';
import Loading from '../component/loading';
import { setUserLoading } from '../Redux/slice/user';
import {useSelector,useDispatch} from 'react-redux';

function LoginInScreen() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {userLoading} = useSelector(state => state.user)
    const navi = useNavigation();
    const dispatch = useDispatch();
    const handleClick = async () => {
        if(email && password){
            // navi.goBack();
            // navi.navigate('Home')
            console.log("email and password", email,password)
            try{
              dispatch(setUserLoading(true));
              await createUserWithEmailAndPassword(auth, email, password); 
              dispatch(setUserLoading(false));
            }catch(e){
              dispatch(setUserLoading(false));
              Snackbar.show({
                text: e.message,
                backgroundColor:'red'
               ,
              });
            }
           
        }
        else{
          Snackbar.show({
            text: 'Email & Password is reqiured',
            backgroundColor:'red'
           ,
          });
        }
    }
  return (
    <ScreenWarpper>
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="static mt-5">
                
                <View>
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign Up</Text>
                </View>
                   
            </View>
            <View className="flex justify-center items-center">
                <Image source={require('../assests/images/signup.png')} className="h-80 w-80"/>
                {/* <BackButton/> */}
            </View>
            <View>
                <Text className="text-black text-lg text-bold">Email</Text>
                <TextInput value={email} onChangeText={(text) => setEmail(text)} className="p-4 bg-white rounded-full mb-3" />
                <Text className="text-black text-lg text-bold">Password</Text>
                <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} className="p-4 bg-white rounded-full "/>
                         
            </View>
        
        </View>
        {
          userLoading ? (
            <Loading/>
          ):(
          <View>
            <TouchableOpacity onPress={handleClick} style={{backgroundColor:colors.button}} className="my-20 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
        </View>
          )
        }
        
      </View>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  
// });

export default LoginInScreen;
