/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Children } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function ScreenWarpper({children}) {
  return (
    <View>
      {children}
    </View>
  );
}

// const styles = StyleSheet.create({
  
// });

export default ScreenWarpper;
