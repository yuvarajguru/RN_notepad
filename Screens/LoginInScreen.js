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
import BackButton from '../component/BackButton';
// import { Image } from 'react-native-svg';
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import Snackbar from 'react-native-snackbar';
// import {createUserWithEmailAndPassword} from "firebase/auth"

import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth"
import Loading from '../component/loading';
import {useSelector, useDispatch} from 'react-redux';
import { setUserLoading } from '../Redux/slice/user';

function LoginInScreen() {
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const loading =  useSelector( state => state.user.userLoading)
    const navi = useNavigation();
    const dispatch = useDispatch();
    const handleClick = async () => {
        if(Email && Password){
            // navi.goBack();
            // navi.navigate('Home')
            console.log("email and password", Email,Password)
            try{
              dispatch(setUserLoading(true));
            await signInWithEmailAndPassword(auth, Email, Password);
            dispatch(setUserLoading(false));
            }catch(e){
              dispatch(setUserLoading(false));
              console.log("messsage",e.message)
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
      <ScrollView> 
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="static mt-5">
                
                <View>
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Log In</Text>
                </View>
                   
            </View>
            <View className="flex justify-center items-center">
                <Image source={require('../assests/images/login.png')} className="h-80 w-80"/>
                {/* <BackButton/> */}
            </View>
            <View>
                <Text className="text-black text-lg text-bold">Email</Text>
                <TextInput value={Email} onChangeText={(text) => setEmail(text)} className="p-4 bg-white rounded-full mb-3 text-black" />
                <Text className="text-black text-lg text-bold">Password</Text>
                <TextInput secureTextEntry value={Password} onChangeText={(text) => setPassword(text)} className="p-4 bg-white rounded-full text-black"/>
                <TouchableOpacity className="flex-row justify-end mt-2 px-2 font-bold">
                    <Text>Forgot Password?</Text>
                    </TouchableOpacity>            
            </View>
        
        </View>
        <View>
          {loading ? 
          
          <Loading/> 
          :
            <TouchableOpacity onPress={handleClick} style={{backgroundColor:colors.button}} className="my-20 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">Login</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      </ScrollView>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  
// });

export default LoginInScreen;
