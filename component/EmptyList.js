/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Children } from 'react';
// import type {PropsWithChildren} from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function EmptyList() {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
        <Image source={require('../assests/images/empty.png')} className="w-36 h-36 shadow"/>
        <Text className="font-bold text-red-400">List is empty</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
  
// });

export default EmptyList;
