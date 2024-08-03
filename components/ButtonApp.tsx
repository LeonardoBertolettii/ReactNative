import { Pressable, StyleSheet, Text, View } from "react-native";


const ButtonApp = ({placeHolder,onPress}:any) => {
    return(
        <Pressable  style={styles.button}>
            <Text style={styles.text} onPress={onPress}>{placeHolder}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        width:`90%`,
        height:35,
        backgroundColor:`green`,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
        
    },
    text:{
        fontSize:25,
    }
})

export default ButtonApp;