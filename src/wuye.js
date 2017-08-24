import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/header';
import Footer from './components/footer';

export default class wuye extends Component {
  render(){
    return (
      <View style={{
          backgroundColor: '#fff',width:200,height:300
        }}>
        <Header/>
      <Footer/>
      </View>
    )
  }
}
