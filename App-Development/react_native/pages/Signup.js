









import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar,Image } from 'react-native-elements';
function Signup({ navigation }) {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/wheel.png')} style={styles.imgBackground}>
        <LinearGradient
         colors={["#09203f", "#537895","pink"]}
         start={[0.9, 0.9]}
         style={styles.linearGradient}
       >
        
        <view style={styles.reg}>
        <Text style={styles.tex} >username</Text>
        <br></br>
       <TextInput style={styles.textinput}
       underlineColorAndroid={'transparent'}/>
        <br></br>
        <Text style={styles.tex} >email id</Text>
        <br></br>
       <TextInput style={styles.textinput}
       underlineColorAndroid={'transparent'}/>
        <br></br>
       <Text style={styles.tex} >Password</Text>
       <br></br>
       <TextInput style={styles.textinput}
       secureTextEntry={true} underlineColorAndroid={'transparent'}/>
       <TouchableOpacity style={styles.button}>
   <Text style={styles.btnText} onPress={() => navigation.navigate('Posts')}>Signup</Text>
   </TouchableOpacity>
        </view>
     
       </LinearGradient>
     </ImageBackground>
   </View>
     
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    
    },
    imgBackground: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    },
    linearGradient: {
      width: '100%',
      height: '100%',
      opacity: 0.95,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tex: {
      color: 'color: rgba(78, 5, 104, 0.75)',
      position: 'relative',
      fontSize: '20px',
      fontFamily:'sans-serif-condensed',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    new: {
        alignSelf:'stretch',
      color:'white'
    },
    textinput:{
     
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
      fontSize: '15px',
      borderBottomColor:'rgba(78, 5, 104, 0.75)',
      borderBottomWidth:1,
    },
    button: {
      alignSelf:'stretch',
      alignItems:'center',
      padding:20,
      backgroundColor:'rgba(90, 70, 103,0.75)',
      marginTop:0,
      borderRadius:100
  
    },
    btnText: {
      color:'pink',
      fontWeight:'bold',
    },
    sign: {
      color:'rgb(77, 0, 153)',
      fontWeight:'bold',
    },
    box: {
      flex: 1,
      backgroundColor:'#DAC3C3'
    },
  });

export default Signup;