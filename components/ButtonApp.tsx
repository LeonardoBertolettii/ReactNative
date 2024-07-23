import { StyleSheet, Text, View } from "react-native";


const ButtonApp = ({placeHolder}:any) => {
    return(
        <View style={styles.button}>
            <Text>{placeHolder}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width:150,
        backgroundColor:`red`,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
        
    }
})

export default ButtonApp;