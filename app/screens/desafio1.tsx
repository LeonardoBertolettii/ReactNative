
import InputApp from "@/components/InputApp";
import { useEffect, useState } from "react";
import { Button, Text,StyleSheet, TextComponent, View, Image, Modal } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function desafio1(){
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [sex,setSex] = useState('')
    const [modalVisible,SetVisible] = useState(false)
    useEffect(()=>{
        const loadData = async () => {
            const savedName = await AsyncStorage.getItem('name')
            const savedAge = await AsyncStorage.getItem('age')
            const savedSex = await AsyncStorage.getItem('sex')
            if(savedName) setName(savedName)
            if(savedAge) setAge(savedAge)
            if(savedSex) setSex(savedSex)
        }
    loadData()
    })

    const saveData = async () => {
        await AsyncStorage.setItem('name',name)
        await AsyncStorage.setItem('age',age)
        await AsyncStorage.setItem('sex',sex)
        alert('Conta criada')
    }
    return(
    <GestureHandlerRootView>

    <View style={styles.screen}>
        <Text>cadastro</Text>
        <InputApp placeHolder={'Nome'} text={setName}/>
        <InputApp placeHolder={'Idade'} text={setAge}/>   
        <Button title="Homem" onPress={()=>setSex('Homem')}/>
        <Button title="Mulher" onPress={()=>setSex('Mulher')}/>
        <Button title="Salvar" onPress={saveData}/>
        <Button title="Ver perfil" onPress={()=>SetVisible(true)}/>
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
                <View style={styles.modal}>               
                    <Text>{name}{age}{sex}</Text>  
                        <Button title="Fechar" onPress={()=>{SetVisible(false)}}/>               
                </View>
        </Modal>
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
    },
    modal:{
        height:300,
        borderRadius:15,
        backgroundColor:'blue',
        width:'100%',
        justifyContent:'center'
    }
})