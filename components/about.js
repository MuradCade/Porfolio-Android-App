import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from "./viewpage";

const screen = {
  Home:{
    screen: Home
  }

  }
  const HomeStack= createStackNavigator(screen);




export default createAppContainer(HomeStack);
