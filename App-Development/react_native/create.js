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
function Content(){
    return(
      <View style={mystyles.contentbox}>
        <Text style={mystyles.publish}>Publish</Text>
        <TextInput
          style={mystyles.genere}
          maxLength = {20}
          placeholder="topic(20 characters only)"
        />
        <br></br>
        <TextInput
          style={mystyles.topic}
          maxLength = {20}
          placeholder="genere(20 characters only)"
        />
        <View style={mystyles.icons}>
        <EvilIcons name="link" size={24}  color="#A91B60" style={mystyles.icon1} />
        <Entypo name="image" size={24} color="#603F8B" style={mystyles.icon2}/>
        <Entypo name="location-pin" size={24} color="#A91B60" style={mystyles.icon3}/>
        <Octicons name="mention" size={24} color="#603F8B" style={mystyles.icon4} />
        <FontAwesome name="underline" size={24} color="#A91B60" style={mystyles.icon5}/>
        <Ionicons name="ios-color-palette" size={24} color="#603F8B" style={mystyles.icon6} />
        <FontAwesome name="microphone" size={24} color="#A91B60" style={mystyles.icon7} />
        </View>
       
         <Textarea
      containerStyle={mystyles.textareaContainer}
      style={mystyles.textarea}
      maxLength={300}
      placeholder={'Start writing (300 characters max)。。。'}
      placeholderTextColor={'#603F8B'}
      underlineColorAndroid={'transparent'}
    />
      </View>
    );
  }
 export default Content;
const mystyles=StyleSheet.create({
    contentbox:{
      flex:1,
       backgroundColor:'#DAC3C3'
     },
     publish:
     { color: 'purple',
     position: 'relative',
     right:10,
     top:40,
     fontSize: '20px',
     fontFamily:'sans-serif-condensed',
     fontWeight: 'bold',},
     topic:{
       position:"absolute",
       top:80,
       left:10,
       fontSize: '15px',
       height: 40, 
       borderColor: '#A91B60', 
       borderWidth: 3,
       borderBottomEndRadius:10,
       borderTopColor:'#DAC3C3',
       borderLeftColor:'#DAC3C3',
       borderRightColor:'#DAC3C3',
       color: 'purple',
     },
     genere:{
       position:"absolute",
       top:40,
       left:10,
       fontSize: '15px',
       height: 40, 
       borderColor: '#A91B60', 
       borderWidth: 3,
       borderBottomEndRadius:10,
       borderTopColor:'#DAC3C3',
       borderLeftColor:'#DAC3C3',
       borderRightColor:'#DAC3C3',
       color: 'purple',
     },
     icons:{
       position:'fixed',
       bottom:0,
     left:20,
     padding:10,
     },
     icon1:{
       position:'fixed',
       bottom:0,
     left:10,
     padding:10,
     }
     ,
     icon2:{
       position:'fixed',
       bottom:0,
     left:50,
     padding:10,
     }
     ,
     icon3:{
       position:'fixed',
       bottom:0,
     left:100,
     padding:10,
     }
     ,
     icon4:{
       position:'fixed',
       bottom:0,
     left:150,
     padding:10,
     }
     ,
     icon5:{
       position:'fixed',
       bottom:0,
     left:200,
     padding:10,
     },
     icon6:{
       position:'fixed',
       bottom:0,
     left:250,
     padding:10,
     },
     icon7:{
       position:'fixed',
       bottom:0,
     left:300,
     padding:10,
     },
     full:{
       position:"absolute",
       width:'90%',
       top:130,
       left:10,
      // right:10,
       fontSize: '13px',
       height: 40, 
       borderColor: '#A91B60', 
       borderWidth: 2,
      // borderBottomEndRadius:10,
       borderTopColor:'#DAC3C3',
       borderLeftColor:'#DAC3C3',
       borderRightColor:'#DAC3C3',
       borderBottomColor:'#DAC3C3',
       color: '#603F8B',
       overflow:'visible'
     },
     textareaContainer: {
       position:'absolute',
       bottom:80,
       height: 450,
       padding: 5,
       backgroundColor: '#DAC3C3',
       color: '#603F8B',
     },
     textarea: {
       textAlignVertical: 'top',  // hack android
       height: '100%',
       fontSize: 18,
       color: '#603F8B',
     },
  });