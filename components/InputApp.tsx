import React from "react";
import { InputAccessoryView, StyleSheet,Text,View } from "react-native";



const InputApp =({placeHolder}:any)=>{
return(
    <View style={styles.input}>
        <InputAccessoryView></InputAccessoryView>
    </View>
)
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:`blue`
    } 
})

export default  InputApp;