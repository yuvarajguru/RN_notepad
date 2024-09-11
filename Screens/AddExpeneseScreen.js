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
import Snackbar from 'react-native-snackbar';
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {addDoc} from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import TripExpeneseScreen from './TripExpeneseScreen';
import { expensesRef } from '../config/Firebase';
import Loading from '../component/loading';

function AddExpeneseScreen(props) {
    let { id } = props.route.params;
    console.log("trip id", id);
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    // const [category ,setCategory] = useState('');
    const navi = useNavigation();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if(title && amount){
            setLoading(true);
            let doc = await addDoc(expensesRef,{
              title,
              amount,
              tripId: id
            })
            setLoading(false);
            if(doc && doc.id){
              navi.goBack();
            }
        }
        else{
            Snackbar.show({
                text: 'Please fill all filed',
                backgroundColor:'red',
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
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Expenese</Text>
                </View>
                   
            </View>
            <View className="flex justify-center items-center">
                <Image source={require('../assests/images/expenseBanner.png')} className="h-64 w-64"/>
                {/* <BackButton/> */}
            </View>
            <View>
                <Text className="text-black text-lg text-bold">For what?</Text>
                <TextInput value={title} onChangeText={(text) => setTitle(text)} className="p-4 bg-white rounded-full mb-3" />
                <Text className="text-black text-lg text-bold">How much?</Text>
                <TextInput value={amount} onChangeText={(text) => setAmount(text)} className="p-4 bg-white rounded-full mb-3"/>
            </View>
        
        </View>
        <View>
          {loading ? <Loading/> : 
      <TouchableOpacity onPress={handleClick} style={{backgroundColor:colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
           <Text className="text-center text-white text-lg font-bold">Add Expenese</Text>
       </TouchableOpacity>
          }
           
        </View>
      </View>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  
// });

export default AddExpeneseScreen;
