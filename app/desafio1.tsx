import InputApp from "@/components/InputApp";

import { useState } from "react";
import { Button, Text,StyleSheet, TextComponent, View, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function desafio1(){
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [sex,setSex] = useState('')
    const test= false
    return(
    <GestureHandlerRootView>

    <View style={styles.screen}>
        <Text>cadastro</Text>
        <InputApp placeHolder={'Nome'} text={setName}/>
        <InputApp placeHolder={'Idade'} text={setAge}/>   
        <Button title="Homem" onPress={()=>setSex('Homem')}/>
        <Button title="Mulher" onPress={()=>setSex('Mulher')}/>
        
        <Text style={styles.textTitle}>Conta</Text>
        <Text>Nome: {name}</Text>
        <Text>Idade: {age}</Text>
        <Text>Sexo: {sex}</Text>

    </View>
    </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#7fffd4',
        
    },
    button:{
        justifyContent:'flex-end'
    },
    textTitle:{
        alignSelf:'flex-start',
        fontSize:50,
        marginHorizontal:20
    }
})