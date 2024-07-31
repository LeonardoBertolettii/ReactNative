import React, { useState } from "react";
import { InputAccessoryView, StyleSheet,Text,View } from "react-native";
import { TextInput } from "react-native-gesture-handler";



const InputApp =({placeHolder,text}:any)=>{
return(
        <TextInput placeholder={placeHolder} style={styles.input} autoFocus={false} onChangeText={text}/>
)
}

const styles = StyleSheet.create({
    input:{
        borderRadius:16,
        borderWidth:4,
        borderColor:'green',
        width:'90%',
        height:45,  
        fontSize:20,
        marginVertical:10,
        textAlign:'center',
        backgroundColor:'#ffff'
    },
})

export default  InputApp;