import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Footer from './components/footer';

export default class wuye extends Component {
  render(){
    return (
      <View style={{
          backgroundColor: 'blue',width:200,height:300
        }}>
      <Footer/>
      </View>
    )
  }
}
