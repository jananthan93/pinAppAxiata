
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PinFiller from './src/pinFiller';
import NumberButton from './src/numberButton';

const buttons=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [null,0,"c"]
]

export default class App extends Component {
  state={
    numberCount:0,
    numberArray:['','','',''],
    displayText:'',
    incorrectPin:0,
    pinCode:1256,
    bool:true
  }

  handlepage=()=>{

  }
  handleInput=(input)=>{

    const {numberArray}=this.state
    const {pinCode}=this.state  
      
    if(input != 'c' && input !='OK'){
      if(this.state.numberCount<4){
        let i=this.state.numberCount
        let newArray=numberArray;
        newArray[i]=input;
        i=i+1;
      //  if(this.state.displayText=='please reset your pin'&& this.state.numberCount==3){
      //   let num=''
      //   numberArray.map(pin=>(
      //     num=num + pin
      //   ))
      //   this.setState({
      //     pinCode:num,
      //     numberArray:['','','',''],
      //     displayText:'Enter Pin to Unlock'
      //   })
      //  }
      //  else
      //       {
              this.setState({
                numberArray:newArray,
                numberCount:i
              })
        
                if(this.state.numberCount==3){
                  let num=''
                  numberArray.map(pin=>(
                    num=num + pin
                  ))
                
                  if(num==pinCode){
                        this.setState({
                          numberArray:['','','',''],
                          numberCount:0
                      })
                      alert("Sucessfull")
                  }
                    else  if(this.state.incorrectPin>1){
                            this.setState({
                              displayText:'please reset your pin',
                              numberArray:['','','',''],
                              numberCount:0,
                              incorrectPin:0
                            })
                      }
                    else {
                      let n = this.state.incorrectPin;
                      n =n+1;
                        this.setState({
                          numberArray:['','','',''],
                          displayText:'Incorrectpin',
                          numberCount:0,
                          incorrectPin:n
                      })
                    }
                  }
            }
          }
       
          
   
  //   if(input === 'c'){
  //     this.setState({
  //       title:"Enter Pin to Unlock",
  //       numberCount:0,
  //       displayTextvalue:'' 
  //     })
  //   }
  }
  renderButton(){
    let layouts=buttons.map((buttonRow,index)=>{
      let rowItem=buttonRow.map((btnItem,btnIndex)=>{
        return <NumberButton 
        handleOnPress={()=>this.handleInput(btnItem)}
        value={btnItem} 
        key={'btn-'+btnIndex}
        />
      })
      return <View style={styles.inputRow} key={'row-'+index}>{rowItem}</View>
    })
    return layouts;
  }
  render() {
    return (
      <View  style={styles.container}>
        <View style={styles.boder}/>
        <View style={styles.unlockTextContainer}>
          <Text style={{fontSize:18,color:"#000000"}}>Enter Pin To Unlock</Text>
        </View>
      <PinFiller pinNumber={this.state.numberArray}/>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
       <View style={styles.buttonContainer}>
          {this.renderButton()}
        </View>
        <View>
            <Text style={styles.forgotText}>Forgot Pin?</Text>
            <Text style={styles.resetText}>Tap Here to Reset</Text>
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent:"center",
    borderWidth:1,
    elevation: 15,
    // borderLeftColor:"#c70a26",
    // borderRightColor:"",
    // borderTopColor:""
  },
  boder:{
    flex:1 ,
    alignItems:"flex-start",
    borderLeftColor:"#c70a26",
    borderLeftWidth:15,
    borderRightWidth:15,
    borderRightColor:"#c70a26",
    borderTopWidth:15,
    borderTopColor:"#c70a26",

  },
  buttonContainer:{
    flex:5,
    justifyContent:"space-evenly"
  },
  inputRow:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
 unlockTextContainer:{
   flex:1,
   flexDirection:"row",
   justifyContent:"center",
   alignItems:"flex-end",
   color:"#0000ff"
 },
  displayText:{
    textAlign:"center",
    color:"red",
    fontSize:15
  },
  resetText:{
    textAlign:"center",
    color:"blue",
    fontSize:15,
    justifyContent:"center",
    marginBottom:10
  },
  forgotText:{
    textAlign:"center",
    fontWeight: 'bold',
    color:"black",
    fontSize:15,
    justifyContent:"center",
  }
});
