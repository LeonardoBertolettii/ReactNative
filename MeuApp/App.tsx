import React, { Component } from "react";
import { Image } from "react-native";


class App extends Component{
  render(){
    return(
      <view>
        <text style={{color:'yellow', fontSize:25, margin:20}}>Bob esponja</text>
        <Image 
        source={{uri:'https://upload.wikimedia.org/wikipedia/pt/b/bf/SpongeBob_SquarePants_personagem.png'}}
        style={{width:300, height: 300}}
        />
        <text></text>
      </view>
    )
  }
}
export default App;