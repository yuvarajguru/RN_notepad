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
import { useNavigation } from '@react-navigation/native';
import Loading from '../component/loading';
import {addDoc} from 'firebase/firestore'
import { tripRef } from '../config/Firebase';
import {useSelector,useDispatch} from 'react-redux';

function AddTripScreen() {
    const [place,setPlace] = useState('');
    const [country,setCountry] = useState('');
    const [loading,setLoading] = useState(false);
    const navi = useNavigation();
    const {user} = useSelector(state => state.user);

    console.log("user",user);
    const handleClick = async () => {
        if(place && country){
            setLoading(true);
            // navi.navigate('Home')
            let doc = await addDoc(tripRef,{
                place,
                country,
                userId: user.uid
            })
            setLoading(false);
            if(doc && doc.id){
                navi.goBack();
            }
        }
        else{
            Snackbar.show({
                text:   "place and country is required!",
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
                <View className="">
                    <BackButton/>
                </View>
                <View>
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Trip</Text>
                </View>
                   
            </View>
            <View className="flex justify-center items-center">
                <Image source={require('../assests/images/4.png')} className="h-64 w-64"/>
                {/* <BackButton/> */}
            </View>
            <View>
                <Text className="text-black text-lg text-bold">Where on Earth?</Text>
                <TextInput value={place} onChangeText={(text) => setPlace(text)} className="p-4 bg-white rounded-full mb-3" />
                <Text className="text-black text-lg text-bold">Where country</Text>
                <TextInput value={country} onChangeText={(text) => setCountry(text)} className="p-4 bg-white rounded-full mb-3"/>
            </View>
        
        </View>
        <View>
            {loading ? 
                <Loading/>
            :
            <TouchableOpacity onPress={handleClick}  style={{backgroundColor:colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                    <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
             </TouchableOpacity>
            }
           
        </View>
      </View>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  
// });

export default AddTripScreen;
