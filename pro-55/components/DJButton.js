import  React, {Component} from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Audio} from 'expo-av';

class DJButton extends Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      {uri: this.props.myuri},
   { shouldPlay: true }
    );
  }
  render(){
    return(
      <Button style={styles.buttonstyle} color={this.props.mycolor} title={this.props.mytitle} height={this.props.mysize} onPress={this.playSound} > 
      </Button>
       );
  }
}
 
const styles= StyleSheet.create({
  buttonstyle:{
    width:450,
    marginTop:40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    

  }
})
export default DJButton;

//    {uri:'https://freesound.org/data/previews/231/231341_3908940-lq.mp3'}
//   {uri:'https://freesound.org/data/previews/452/452774_9080507-lq.mp3'}
//   {uri:'https://freesound.org/data/previews/368/368405_5381677-lq.mp3'}
//  {uri:'https://freesound.org/data/previews/353/353964_5442183-lq.mp3'}
