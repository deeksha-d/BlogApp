import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar,Image } from 'react-native-elements';

function Posts({navigation}){
   
  
      
  
      return (
        <View style={styles.box}>
       
           <View style={styles.se2}>
       
         <View style={styles.imgBox2}>
         <Image style={styles.imgb2} source={require('../assets/user.png')} />
        
            
          </View>
          <TouchableOpacity>
         <Text onPress={() => navigation.navigate('Profile')}>P</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText} onPress={() => navigation.navigate('Create')}>Add Post</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button2}>
        <Text style={styles.btnText} onPress={() => navigation.navigate('Explore')}>Explore</Text>
        </TouchableOpacity>
       </View>
        
        
        
        <View style={styles.sepost}>
       
          
              <Image  source={require('../assets/im1.jpg')} style={styles.postIm}/>      
            
             
            
           
          </View>
  
          <View style={styles.secom}>
       
          
          <View>
          <Text style={styles.topic}>Reality check of vaccine</Text>
            <br></br>
            <Text style={styles.gen}>Genere:Science</Text> 
              <br></br>
            <Text style={styles.auth}>Amrith: 40m ago</Text>   
            <View style={styles.img3} >
              <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
             </View>
             
            </View>  
            <Text style={styles.num}>280</Text>  
          </View>
         
          
      


       <View style={styles.sepost}>
       
          
       <Image  source={require('../assets/im.jpg')} style={styles.postIm}/>      
     
      
     
    
   </View>

   <View style={styles.secom}>

   
   <View>
   <Text style={styles.topic}>Places untouched</Text>
     <br></br>
     <Text style={styles.gen}>Genere:Travel</Text> 
       <br></br>
     <Text style={styles.auth}>Rohan: 40m ago</Text>   
     <View style={styles.img3} >
       <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
      </View>
      
     </View>  
     <Text style={styles.num}>280</Text>  
   </View>
  
   





       
        </View>
  
        
        
      );
    
  }

  export default Posts;

  const styles = StyleSheet.create({
      box:{
          backgroundColor:'color: rgba(34, 50, 104, 0.5)',
          height:'100%',
          width:'100%',
      },
  se:{
    height:'120px',
    backgroundColor:'#EBAAB0',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,

  },
  secom:{
    height:'80px',
    backgroundColor:'#EBAAB0',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,

  },
  sepost:{
   // height:'170px',
   // backgroundColor:'#EBAAB0',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,
    overflow:'scroll'
  },
  postIm:{
    height:'400px',
   // backgroundColor:'#EBAAB0',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,

  },
  se2:{
      position:'relative',
      top:'1%',
      
    height:'60px',
    backgroundColor:'red',
    borderRadius:15,
    marginBottom:13,
    marginLeft:3,
   padding:10,
  },

  button: {
    position: 'absolute',
width: '94px',
height: '36px',
left: '309px',
top: '15%',
backgroundColor:'#7400B3',
borderRadius:100,
padding:8,
shadowColor: "black", 
    shadowOpacity: 0.5, 
    shadowOffset: {
      height: 8,
      width: 4
    }, 
    elevation:8,
  },
  button2: {
    position: 'absolute',
width: '94px',
height: '36px',
left: '50%',
top: '15%',
backgroundColor:'#7400B3',
borderRadius:100,
padding:8,
shadowColor: "black", 
    shadowOpacity: 0.5, 
    shadowOffset: {
      height: 8,
      width: 4
    }, 
    elevation:8,
  },
btnText: {
  color:'black',
  fontWeight:'bold',
  textAlign: 'center',
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
  imgBox2:{
      position:'absolute',
      top:'0',
      left:'0',
    backgroundColor:'white',
    height:'50px',
    width:'50px',
    borderRadius:100,
   // left:2,
    shadowColor: "black", 
    shadowOpacity: 0.5, 
    shadowOffset: {
      height: 8,
      width: 4
    }, 
    elevation:8,
    overflow:'hidden'
  },
  imgb2:{
   
    height:'50px',
    width:'50px',
    borderRadius:100,
    //left:2
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
    top:0,
   
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
    padding:0,
    
  },
  gen: {
    marginTop:5,
    color: '#603F8B',
    fontSize: '15px',
    fontFamily:'italic',
    fontWeight: 'bold',
    padding:0
  }
  ,auth: {
    marginTop:5,
    color: '#A91B60',
    fontSize: '15px',
    fontFamily:'italic',
    fontWeight: 'bold',
    padding:4
  },
  num:{
    position: 'absolute',
    right:10,
    top:'50%',
    bottom:0,
    fontWeight: 'bold',
    fontSize: '17px',
    color: '#A91B60',}
  });  