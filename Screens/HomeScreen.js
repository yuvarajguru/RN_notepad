/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
import { colors } from '../theme';
import randomImage from '../assests/randomImage';
import EmptyList from '../component/EmptyList';





function HomeScreen({navigation}) {
  const item = [
    {
      id:1,
      place:'Chennai',
      State:'TamilNadu'
    },
    {
      id:2,
      place:'Bangalore',
      State:'karnataka'
    }, {
      id:3,
      place:'Hyedrabad',
      State:'Telugana'
    }, {
      id:4,
      place:'Kochi',
      State:'Kerala'
    }, {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },
    {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },
    {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },

    {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },
    {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    }, {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },

    {
      id:5,
      place:'Mumbai',
      State:'Maharastra'
    },
  ]

  const navi = useNavigation();
  return (
    <ScreenWarpper className="flex-1">
      {/* <ScrollView> */}

      
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} shadow-xl font-bold text-3xl text-center` }>Expensify</Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
        <Text className={colors.heading}>Logout</Text>
      </TouchableOpacity>
      </View>
      <View className="flex-row justify-center item-center bg-blue-200 rounded-xl mx-4 mb-2 ">
        <Image source={require('../assests/images/banner.png')}  className="w-60 h-60"/>
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
          <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full" onPress={() => {navi.navigate('AddTripScreen'),console.log('hitted')}}>
            <Text className="text-black">Add trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:400}}>
    
        <FlatList 
          data={item}
          numColumns={2}
          ListEmptyComponent={EmptyList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent:'space-between'
          }}
        
          renderItem={({item}) => {
            return (
              <TouchableOpacity className="bg-white p-4 rounded-2xl mb-3 shadow-2xl">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2"/>
                    <Text className={"text-black font-bold"}>{item.place}</Text>
                    <Text className={"text-black text-xs"}>{item.State}</Text>
                  </View>
              </TouchableOpacity>
              
            )
          }}
        />
              
       </View>
      </View>
      {/* </ScrollView> */}
    </ScreenWarpper>
  );
}

// const styles = StyleSheet.create({
  
// });

export default HomeScreen;


      {/* <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>click me</Text>
      </TouchableOpacity> */}