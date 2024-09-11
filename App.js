/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import NavigationFile from './Navigation/navigationFile';
import { store } from './Redux/store';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


function App() {

  return (
    <Provider store={store}>
           <NavigationFile/>
    </Provider>
   
  );
}

// const styles = StyleSheet.create({
  
// });

export default App;
