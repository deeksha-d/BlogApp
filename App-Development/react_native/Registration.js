import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {navigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
// export default function App({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('./assets/wheel.png')} style={styles.imgBackground}>
//         <LinearGradient
//           colors={["#09203f", "#537895","pink"]}
//           start={[0.9, 0.9]}
//           style={styles.linearGradient}
//         >
         
//          <view style={styles.reg}>
//          <Text style={styles.text} >user name</Text>
//          <br></br>
//         <TextInput style={styles.textinput}
//         underlineColorAndroid={'transparent'}/>
//          <br></br>
//         <Text style={styles.text} >Password</Text>
//         <br></br>
//         <TextInput style={styles.textinput}
//         secureTextEntry={true} underlineColorAndroid={'transparent'}/>
//         <TouchableOpacity style={styles.button}>
//     <Text style={styles.btnText} onPress={() => navigation.navigate('Registration.js')}>Signin</Text>
//     </TouchableOpacity>
//          </view>
      
//         </LinearGradient>
//       </ImageBackground>
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imgBackground: {
//     flex: 1,
//     width: "100%",
//     alignItems: "center",
//   },
//   linearGradient: {
//     width: '100%',
//     height: '100%',
//     opacity: 0.95,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: 'color: rgba(78, 5, 104, 0.75)',
//     position: 'relative',
//     fontSize: '20px',
//     fontFamily:'sans-serif-condensed',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   new: {
//       alignSelf:'stretch',
//     color:'white'
//   },
//   textinput:{
   
//     alignSelf:'stretch',
//     height:40,
//     marginBottom:30,
//     fontSize: '15px',
//     borderBottomColor:'rgba(78, 5, 104, 0.75)',
//     borderBottomWidth:1,
//   },
//   button: {
//     alignSelf:'stretch',
//     alignItems:'center',
//     padding:20,
//     backgroundColor:'rgba(90, 70, 103,0.75)',
//     marginTop:0,
//     borderRadius:100

//   },
//   btnText: {
//     color:'red',
//     fontWeight:'bold',
//   }
// });
