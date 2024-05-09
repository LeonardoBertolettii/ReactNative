import React from "react";
import { StyleSheet, View } from 'react-native';

const card = ({}) =>{
  <view style={styles.card}>
    <text>texto teste</text>
  </view>
}
const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor:'blue',
        paddingVertical: 8,
        paddingHorizontal: 12,
    }
})


export default card;