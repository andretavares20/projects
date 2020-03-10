import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  Alert,
  
} from 'react-native';

export default class ButtonApp extends Component{
  constructor(props) {
    super(props);

    this.state = {
      valueHolder: true,
      contador: 0
    }

    this.state2 = {
      valueHolder: false,
      contador: 0
    }

  }

  onClick(){
    this.setState(prevState => ({
      size: prevState.size+10
    }));
  }

  SetValue() {
    this.setState({
      valueHolder: false
    })
  }

  SetValue2() {
    this.setState({
      valueHolder: true
    })
  }


  apertouContador = () =>{
    this.setState({contador : this.state.contador+1});
  }
  apertouReset = () =>{
    this.setState({reset : this.state.contador=0})
  }
  apertouFontSize = () =>{
    this.setState({fontSize : this.state.fontSize+1});
  }


  render () {
    
    return (
      <View style = {styles.container}>

       
        
       
        <View style={styles.buttonContainer}>
            <Text style={{fontSize: (this.state.valueHolder === true ? 20 : 40)}}>
              {this.state.contador}
            </Text>
              
        </View>

        <View style={styles.buttonContainer}>

          <Button
            onPress={this.apertouContador}
            title = "Contador"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.apertouReset}
            title = "Reset"
            color= '#ff0000'
          />

        </View>

        <View style={styles.botaoDireita}>
          <Button
            onPress={this.SetValue2.bind(this)}
            title = "--Fontsize"
            color= '#ff0000'
            
          />
       </View>

        <View style={styles.alternativeButtonContainer}>
          <Button title="++Fontsize" onPress={this.SetValue.bind(this)}/>
        </View>
        

      </View>

      

      

      
    )
  }
}


const styles = StyleSheet.create({

  logo: {

    width:150,
    height: 150,
    borderRadius: 100

  },

  container: {
    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  
  },

  buttonContainer: {
    margin: 20,
    
  },
  alternativeButtonContainer: {
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    left: 0,
    position: "absolute"
    
    
  },
  botaoDireita: {
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    right: 0,
    position: "absolute"
  }
})  
