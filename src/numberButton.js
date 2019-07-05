import React, {Component} from 'react';
import {Platform,TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class NumberButton extends Component {
        render(){
            const {value,handleOnPress}=this.props;
        return (
            <TouchableOpacity 
            style={styles.containerStyle}
            onPress={()=>handleOnPress(value)}
            >
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        )
        }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 0.2,
        padding:10,
        margin:2,
        alignItems:"center",
        justifyContent: "space-evenly",
        borderRadius:50,
        borderWidth:0.5,
        borderColor:"#000000"
      },
    text:{
        color:"black",
        fontSize:35
    }
})