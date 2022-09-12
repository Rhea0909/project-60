import * as React from 'react';
import { Text, View, Button,  TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound =  async() => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
   render() {
    return (
      <TouchableOpacity
      
          style={styles.button}
            onPress={this.playSound}
            >
            <Text
            style={styles.buttonText}
            > Press me</Text>
          </TouchableOpacity> 
    );
  }
}
const styles=StyleSheet.create({
  button:{
 width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'purple',
              marginTop:200,
              marginLeft:100,
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              

  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20,


  }
})
export default SoundButton