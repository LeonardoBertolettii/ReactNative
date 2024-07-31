
import InputApp from "@/components/InputApp";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View,StyleSheet,Image, Button, KeyboardAvoidingView } from "react-native";
import CardDeafio from "@/components/CardDesafios";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function home() { 
  const[nome,setNome] = useState('')
  const[value,setValue] = useState('')
  return ( 
    <GestureHandlerRootView>
    <View
      style={{
        flex:1,
        paddingHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
        
      }}
      >
      <Text style={{textAlign:'center'}}>Objetivo desta aplicação e demonstrar oq aprendi e apliquei nas aulas da udemy sobre react native</Text>
      <Link href={'../screens/test'}>
      <CardDeafio title="Desafio 1" text='Desafio do banco que issoojncqijnciqncqicnqi ihebwiqv'/>
      <InputApp></InputApp>
      </Link>
    </View>
    </GestureHandlerRootView>
    
  );
}




