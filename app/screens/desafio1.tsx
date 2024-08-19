import InputApp from "@/components/InputApp";
import { useEffect, useState } from "react";
import { Button, Text, StyleSheet, View, Modal } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonApp from "@/components/ButtonApp";

export default function desafio1() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [modalVisible, setVisible] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const savedName = await AsyncStorage.getItem('name');
            const savedAge = await AsyncStorage.getItem('age');
            const savedSex = await AsyncStorage.getItem('sex');
            if (savedName) setName(savedName);
            if (savedAge) setAge(savedAge);
            if (savedSex) setSex(savedSex);
        };
        loadData();
    }, []);

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('age', age);
            await AsyncStorage.setItem('sex', sex);
            alert('Conta criada');
        } catch (error) {
            alert('Erro ao salvar os dados');
        }
    };

    return (
        <GestureHandlerRootView>
            <View style={styles.screen}>
                <Text style={{ alignSelf: `flex-start`, fontSize: 30, marginLeft: 5, fontWeight: `bold` }}>Cadastro</Text>
                <InputApp placeHolder={'Nome'} text={setName} />
                <InputApp placeHolder={'Idade'} text={setAge} />
                <View style={{ flexDirection: `row`, width: `auto` }}>
                    <Button title="Salvar" onPress={saveData} />
                    <Button title="Ver perfil" onPress={() => setVisible(true)} />
                    <Modal transparent={true} animationType="slide" visible={modalVisible}>
                        <View style={styles.modal}>
                            <Text>{name} {age} {sex}</Text>
                            <Button title="Fechar" onPress={() => { setVisible(false); }} />
                        </View>
                    </Modal>
                </View>
                <View style={{ flexDirection: `row`, width: `auto` }}>
                    <ButtonApp placeHolder={`Homem`} onPress={() => setSex(`Homem`)} />
                    <ButtonApp placeHolder={`Mulher`} onPress={() => setSex(`Mulher`)} />
                </View>
                <Text>{name} {age} {sex}</Text>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7fffd4',
    },
    button: {
        width: `90%`,
        height: 35,
        backgroundColor: `green`,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textTitle: {
        alignSelf: 'flex-start',
        fontSize: 50,
        marginHorizontal: 20,
    },
    modal: {
        height: 300,
        borderRadius: 15,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
    },
});
