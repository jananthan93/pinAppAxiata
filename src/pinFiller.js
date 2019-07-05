import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


class PinFiller extends Component {
    
  render() {
    const {pinNumber}=this.props;
      
    return (
      <View style={styles.pinContainer}>
        <View style={pinNumber[0]=="" ? styles.buttonSmall1 :styles.buttonSmall2}/>
        <View style={pinNumber[1]=="" ? styles.buttonSmall1 :styles.buttonSmall2}/>
        <View style={pinNumber[2]=="" ? styles.buttonSmall1 :styles.buttonSmall2}/>
        <View style={pinNumber[3]=="" ? styles.buttonSmall1 :styles.buttonSmall2}/>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
    pinContainer:{
        borderColor:"#f52276",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
        padding:30
      },
  buttonSmall1:{
    borderRadius:20,
    backgroundColor:"#ffffff",
    borderColor:"#f52276",
    borderWidth:2, 
    width:20,
    height:20
  },
  buttonSmall2:{
    borderRadius:20,
    backgroundColor:"#f52276",
    borderColor:"#f52276",
    borderWidth:2, 
    width:20,
    height:20
  }
});
export default PinFiller;