/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { categoryBG, colors } from '../theme';
// import firebase from 'react-native-firebase/firestore';

import firebase from 'firebase/compat/app';


function ExpeenseCard({item}) {



  const handleClick = (id) =>{
    console.log("id", id)
    // firebase().collection("expenses")
    // .doc(id)
    // .delete()
    // .then(() => {
    //   Alert.alert("expense")
    // })
    // .catch(() => {
    //   Alert.alert("error")
    // })
  }
  console.log("item",item);
  return (
    <View style={{backgroundColor: item.amount > 50 ? '#d6372d' : "#CAD309"}} className="flex-row justify-between items-center p-3 mb-3  rounded-full">
        <View>
            <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
            {/* <Text className={`${colors.heading} font-xs`}>{item.category}</Text> */}
        </View>
        <View>
            <Text className="bg-white font-bold ">₹{item.amount}</Text>
        </View>
        <TouchableOpacity style={{width:'12%',height:25,backgroundColor:'#fff'}} onPress={handleClick(item.id)}>
          <Text style={{textAlign:'center', justifyContent:'center', marginTop:4}}>Del</Text>
        </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
  
// });

export default ExpeenseCard;
