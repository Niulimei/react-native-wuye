import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import RNC from 'react-native-css';

class header extends Component {
  render(){
    return (
      <View>
        <View>
          <Text style={styles.description}>商品</Text>
          <Text>服务</Text>
          <Text>其他</Text>
        </View>
        <View>
          <Text>全部</Text>
        </View>
        <View>
          <Text>列表内容</Text>
        </View>
      </View>
  )}
}

const styles = RNC`
   description {
     margin-bottom: 20px;
     text-align: center;
     background-color : red;
   }
 `;


export default  header;
