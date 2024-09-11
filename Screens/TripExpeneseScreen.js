/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  FlatList,
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
import {colors} from '../theme';
import randomImage from '../assests/randomImage';
import EmptyList from '../component/EmptyList';
import BackButton from '../component/BackButton';
import ExpeenseCard from '../component/ExpenseCard';
import {useSelector, useDispatch} from 'react-redux';
import {query, where, getDocs} from 'firebase/firestore'
import { expensesRef } from '../config/Firebase';

function TripExpeneseScreen(props) {
    console.log("props",props.route.params)
    const {id, place , country,} = props.route.params;
    const [expenses, setExpenses] = useState([]);
    const isFocused  = useIsFocused(); //useing usefocused effect
  const item = [
   {
    id:1,
    title:'break fast',
    amount:50,
    category:'food'
   },
   {
    id:2,
    title:'Lanuch',
    amount:150,
    category:'food'
   },{
    id:3,
    title:'mobile case',
    amount:300,
    category:'shopping'
   },
   {
    id:4,
    title:'movie',
    amount:250,
    category:'entertainment'
   },
  ];

  const fetchExpenses = async () => {  //api call from firebase database;
    const q =  query(expensesRef, where("tripId", "==", id))

    const querydata = await getDocs(q); 
    console.log('flatlist expenses', querydata);
    let data = [];
    querydata.forEach((value) => {
        data.push({...value.data(), id: value.id})
    })
    setExpenses(data);

    
  }
  console.log("expenses", expenses);
  useEffect(() => {
    if(isFocused){
      fetchExpenses();
    }
      
  },[isFocused])

  const navi = useNavigation();
  return (
    <ScreenWarpper className="flex-1">
      {/* <ScrollView> */}
      {/* <SafeAreaView > */}
      <View className="px-4">
        <View className="flex-row text-center items-center mt-5">
          <View className="">
            <BackButton />
          </View>
          <View>
            <Text
              className={`${colors.heading} text-xl font-bold text-center mt-7  `}>
                {place}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-center item-center rounded-xl  mb-2 ">
          <Image
            source={require('../assests/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className=" space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenese
            </Text>
            <TouchableOpacity
              className="p-2 px-3 bg-white border-gray-200 rounded-full"
              onPress={() => {
                navi.navigate('AddExpeneseScreen',{id, place, country})
              }}>
              <Text className="text-black">Add Expenese</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={expenses}
            //   numColumns={2}
              ListEmptyComponent={EmptyList}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            //   columnWrapperStyle={{
            //     justifyContent: 'space-between',
            //   }}
              renderItem={({item}) => {
                return (
                 <ExpeenseCard item={item}/>
                );
              }}
            />
          </View>
        </View>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </View>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({

// });

export default TripExpeneseScreen;

{
  /* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>click me</Text>
      </TouchableOpacity> */
}
