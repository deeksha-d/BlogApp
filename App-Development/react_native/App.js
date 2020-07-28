import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar,Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';
import Content from './pages/create.js';
import SignIn from './pages/signIn.js';
import Explore from './pages/Explore.js';
import Posts from './pages/Posts.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js';



const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
       <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Signup" component={Signup} /> 
       
        <Stack.Screen name="Posts" component={Posts} /> 
        <Stack.Screen name="Create" component={Content} /> 
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Profile" component={Profile} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

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
  se:{
    height:'125px',
    backgroundColor:'#EBAAB0',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,

  },
  text:{
padding:5,
    color: 'brown',
    position: 'relative',
    left:8,
    fontSize: '20px',
    fontFamily:'sans-serif-condensed',
    fontWeight: 'bold',
  },
  imgBox:{
    backgroundColor:'white',
    height:'120px',
    width:'120px',
    borderRadius:100,
    left:2,
    shadowColor: "black", 
    shadowOpacity: 0.5, 
    shadowOffset: {
      height: 8,
      width: 4
    }, 
    elevation:8,
    overflow:'hidden'
  },
  img2:{
   
    height:'120px',
    width:'120px',
    borderRadius:100,
    left:2
  },
  content:{

    position: 'absolute',
    backgroundColor:'#EBAAB0',
    height:'120px',
    width:'250px',
    left:128,
    top:0
    
  },
  img3:{
    position: 'absolute',
    height:'50px',
    width:'50px',
    right:7,
    borderRadius:100,
    elevation:8,
    overflow:'hidden',
    top:60,
   bottom:0
    //backgroundColor:'grey',
  },
  imgrate:{
    height:'50px',
    width:'50px',
    right:7,
    bottom:0,
    borderRadius:100,
    left:2
  },
  topic: {
    marginTop:5,
    color: '#5F093D',
    fontSize: '18px',
    fontFamily:'monospace',
    fontWeight: 'bold',
    padding:0
  },
  gen: {
    marginTop:15,
    color: '#603F8B',
    fontSize: '15px',
    fontFamily:'italic',
    fontWeight: 'bold',
    padding:0
  }
  ,auth: {
    marginTop:20,
    color: '#A91B60',
    fontSize: '15px',
    fontFamily:'italic',
    fontWeight: 'bold',
    padding:4
  },
  num:{
    position: 'absolute',
    right:10,
    bottom:0,
    fontWeight: 'bold',
    fontSize: '17px',
    color: '#A91B60'
  }
});

// const mystyles=StyleSheet.create({
//   contentbox:{
//     flex:1,
//      backgroundColor:'#DAC3C3'
//    },
//    publish:
//    { color: 'purple',
//    position: 'fixed',
//    right:10,
//    top:10,
//    fontSize: '20px',
//    fontFamily:'sans-serif-condensed',
//    fontWeight: 'bold',},
//    topic:{
//      position:"absolute",
//      top:80,
//      left:10,
//      fontSize: '15px',
//      height: 40, 
//      borderColor: '#A91B60', 
//      borderWidth: 3,
//      borderBottomEndRadius:10,
//      borderTopColor:'#DAC3C3',
//      borderLeftColor:'#DAC3C3',
//      borderRightColor:'#DAC3C3',
//      color: 'purple',
//    },
//    genere:{
//      position:"absolute",
//      top:40,
//      left:10,
//      fontSize: '15px',
//      height: 40, 
//      borderColor: '#A91B60', 
//      borderWidth: 3,
//      borderBottomEndRadius:10,
//      borderTopColor:'#DAC3C3',
//      borderLeftColor:'#DAC3C3',
//      borderRightColor:'#DAC3C3',
//      color: 'purple',
//    },
//    icons:{
//      position:'fixed',
//      bottom:0,
//    left:20,
//    padding:10,
//    },
//    icon1:{
//      position:'fixed',
//      bottom:0,
//    left:10,
//    padding:10,
//    }
//    ,
//    icon2:{
//      position:'fixed',
//      bottom:0,
//    left:50,
//    padding:10,
//    }
//    ,
//    icon3:{
//      position:'fixed',
//      bottom:0,
//    left:100,
//    padding:10,
//    }
//    ,
//    icon4:{
//      position:'fixed',
//      bottom:0,
//    left:150,
//    padding:10,
//    }
//    ,
//    icon5:{
//      position:'fixed',
//      bottom:0,
//    left:200,
//    padding:10,
//    },
//    icon6:{
//      position:'fixed',
//      bottom:0,
//    left:250,
//    padding:10,
//    },
//    icon7:{
//      position:'fixed',
//      bottom:0,
//    left:300,
//    padding:10,
//    },
//    full:{
//      position:"absolute",
//      width:'90%',
//      top:130,
//      left:10,
//     // right:10,
//      fontSize: '13px',
//      height: 40, 
//      borderColor: '#A91B60', 
//      borderWidth: 2,
//     // borderBottomEndRadius:10,
//      borderTopColor:'#DAC3C3',
//      borderLeftColor:'#DAC3C3',
//      borderRightColor:'#DAC3C3',
//      borderBottomColor:'#DAC3C3',
//      color: '#603F8B',
//      overflow:'visible'
//    },
//    textareaContainer: {
//      position:'absolute',
//      bottom:80,
//      height: 450,
//      padding: 5,
//      backgroundColor: '#DAC3C3',
//      color: '#603F8B',
//    },
//    textarea: {
//      textAlignVertical: 'top',  // hack android
//      height: '100%',
//      fontSize: 18,
//      color: '#603F8B',
//    },
// });