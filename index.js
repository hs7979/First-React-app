//import a library to create a new component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';
//create a new component
const App = ()=> (
  <Header />
);
//Render to device
AppRegistry.registerComponent('first',() =>App);
