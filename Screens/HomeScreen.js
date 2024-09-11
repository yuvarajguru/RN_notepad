/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
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
import {signOut} from "firebase/auth"
import { auth, tripRef } from '../config/Firebase';
import {useSelector, useDispatch} from 'react-redux';
import {query, where, getDocs} from 'firebase/firestore'

function HomeScreen({navigation}) {
  const user = useSelector(state => state.user.user);
  const [trips, setTrips] = useState([]);
  const isFocused  = useIsFocused(); //useing usefocused effect
  const item = [
    {
      id: 1,
      place: 'Chennai',
      State: 'TamilNadu',
    },
    {
      id: 2,
      place: 'Bangalore',
      State: 'karnataka',
    },
    {
      id: 3,
      place: 'Hyedrabad',
      State: 'Telugana',
    },
    {
      id: 4,
      place: 'Kochi',
      State: 'Kerala',
    },
    {
      id: 5,
      place: 'Mumbai',
      State: 'Maharastra',
    },
  ];

  const handleLogout = async () =>{
    console.log("jj")
    await signOut(auth);
    navigation.navigate('LandingScreen')
  }

  const fetchTrips = async () => {
    const q =  query(tripRef, where("userId", "==", user.uid))
    const querydata = await getDocs(q); 
    let data = [];
    querydata.forEach((value) => {
        data.push({...value.data(), id: value.id})
    })
    setTrips(data);

    
  }
  console.log('flatlist data', trips);
  useEffect(() => {
    if(isFocused){
      fetchTrips();
    }
      
  },[isFocused])


  const navi = useNavigation();
  return (
    <ScreenWarpper className="flex-1">
      {/* <ScrollView> */}
      <SafeAreaView>
        <View className="flex-row justify-between items-center p-4">
          <Text
            className={`${colors.heading} shadow-xl font-bold text-3xl text-center`}>
            Expensify
          </Text>
          <TouchableOpacity onPress={handleLogout} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center item-center bg-blue-200 rounded-xl mx-4 mb-2 ">
          <Image
            source={require('../assests/images/banner.png')}
            className="w-60 h-60"
          />
        </View>
        <View className="px-4 space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Recent Trips
            </Text>
            <TouchableOpacity
              className="p-2 px-3 bg-white border-gray-200 rounded-full"
              onPress={() => {
                navi.navigate('AddTripScreen'), console.log('hitted');
              }}>
              <Text className="text-black">Add trip</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={trips}
              numColumns={2}
              ListEmptyComponent={EmptyList}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    className="bg-white p-4 rounded-2xl mb-3 shadow-2xl"
                    onPress={() => navi.navigate('TripExpeneseScreen',{...item})}>
                    <View>
                      <Image
                        source={randomImage()}
                        className="w-36 h-36 mb-2"
                      />
                      <Text className={'text-black font-bold'}>
                        {item.place}
                      </Text>
                      <Text className={'text-black text-xs'}>{item.State}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({

// });

export default HomeScreen;

{
  /* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>click me</Text>
      </TouchableOpacity> */
}
