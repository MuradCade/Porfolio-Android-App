// import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-web';
import Home from './home';



export default class viewpage {
  render() {
  //   const preeHandle = () =>{
  //     navigation.navigate('Home');
  // }
    return (
      <View>
        <Text> textIn Component </Text>
        <Button title="go to home page" />

      </View>
    )
  }
}
