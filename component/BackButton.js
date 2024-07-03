/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import { colors } from '../theme';



function BackButton() {

    const navi = useNavigation();
  return (
   <TouchableOpacity onPress={() => navi.navigate('Home')}>
        <ChevronLeftIcon color={colors.button} size={30} />
        {/* <SparklesIconOutline color='red' fill="black" size={42} /> */}
   </TouchableOpacity>

  );
}

// const styles = StyleSheet.create({
  
// });

export default BackButton;
