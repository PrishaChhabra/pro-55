import  React, {Component} from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Audio} from 'expo-av';

class DJTouchable extends Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      {uri: this.props.myuri},
   { shouldPlay: true }
    );
  }
  render(){
    return(
      <TouchableOpacity style={[styles.touchablestyle,{backgroundColor:this.props.mycolor}]} 
      height={this.props.mysize}
         onPress={this.playSound}> 
      <Text> {this.props.mytitle} </Text>
      </TouchableOpacity>
       );
  }
}
 
const styles= StyleSheet.create({
  touchablestyle:{
    width:450,
    marginTop:40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    

  }
})
export default DJTouchable;