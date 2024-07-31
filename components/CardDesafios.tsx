
import {StyleSheet, Text, View} from "react-native"

export default function CardDeafio({title,text}:any){
    return(
        <View style={styles.desafios}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({  
  desafios:{
    backgroundColor:"grey",
    borderWidth:4,
    borderRadius:6,
    alignItems:'center',
  },
  text:{
    textAlign:'center'
  }
  })
  