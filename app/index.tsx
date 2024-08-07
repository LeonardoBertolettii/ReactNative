
import InputApp from "@/components/InputApp";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View,StyleSheet,Image, Button, KeyboardAvoidingView } from "react-native";
import CardDeafio from "@/components/CardDesafios";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Index() {
  const[nome,setNome] = useState('')
  const[value,setValue] = useState('')
  return ( 
    <GestureHandlerRootView>
        <View style={{justifyContent:'flex-start',marginTop:25}}>
        <Text style={{textAlign:'center',fontSize:20}}>Objetivo desta aplicação é demonstrar oque aprendi nas aulas da udemy sobre react native</Text>
        </View>
    <View
      style={{
        flex:1,
        paddingHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
        
      }}
      >
      <Link href={'/screens/desafio1'}>
      <CardDeafio title="Desafio Banco" text='O desafio prático era fazer uma tela de login que retornasse os dados de cadastro em forma de alerta. O objetivo era praticar coisas como useState, Input, alert e async.'/>
      </Link>
    </View>
    </GestureHandlerRootView>
    
  );
}




