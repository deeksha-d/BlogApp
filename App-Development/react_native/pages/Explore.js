import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar,Image } from 'react-native-elements';

class Explore extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <View style={styles.box}>
        <SearchBar
          placeholder="Explore"
          onChangeText={this.updateSearch}
          value={search}
        />
        <Text style={styles.text}>
          Popular
          </Text>
        
        
        
        <View style={styles.se}>
       
          <View style={styles.imgBox}>
            <Image style={styles.img2} source={require('../assets/cam.png')} />      
             </View>
          <View style={styles.content}>
          <Text style={styles.topic}>beauty of birds</Text>
            <br></br>
            <Text style={styles.gen}>Genere:photography</Text> 
              <br></br>
            <Text style={styles.auth}>Amritgha: 30m ago</Text>   
            <View style={styles.img3} >
              <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
             </View>
             
            </View>  
            <Text style={styles.num}>250</Text>  
          </View>
  
          <View style={styles.se}>
       
          <View style={styles.imgBox}>
            <Image style={styles.img2} source={require('../assets/science.png')} />      
             </View>
          <View style={styles.content}>
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
         
          <View style={styles.se}>
       
       <View style={styles.imgBox}>
       <Image style={styles.img2} source={require('../assets/sport.png')} />      
          </View>
       <View style={styles.content}>
       <Text style={styles.topic}>So...the game is still on?</Text>
         <br></br>
         <Text style={styles.gen}>Genere:Sport</Text> 
           <br></br>
         <Text style={styles.auth}>Elie: 45m ago</Text>   
         <View style={styles.img3} >
           <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
          </View>
          
         </View>  
         <Text style={styles.num}>290</Text>  
       </View>
       <Text style={styles.text}>
          Suggested for you
          </Text>
          <View style={styles.se}>
       
       <View style={styles.imgBox}>
         <Image style={styles.img2} source={require('../assets/art.png')} />      
          </View>
       <View style={styles.content}>
       <Text style={styles.topic}>Beauty of birds</Text>
         <br></br>
         <Text style={styles.gen}>Genere:Art</Text> 
           <br></br>
         <Text style={styles.auth}>Jane: 1hr 30m ago</Text>   
         <View style={styles.img3} >
           <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
          </View>
          
         </View>  
         <Text style={styles.num}>250</Text>  
       </View>
       <View style={styles.se}>
       
       <View style={styles.imgBox}>
         <Image style={styles.img2} source={require('../assets/cam.png')} />      
          </View>
       <View style={styles.content}>
       <Text style={styles.topic}>where r u from?</Text>
         <br></br>
         <Text style={styles.gen}>Genere:photography</Text> 
           <br></br>
         <Text style={styles.auth}>Amritgha: 30m ago</Text>   
         <View style={styles.img3} >
           <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
          </View>
          
         </View>  
         <Text style={styles.num}>250</Text>  
       </View>
        </View>
  
        
        
      );
    }
  }
  export default Explore;
  const styles = StyleSheet.create({
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
    color: '#A91B60',}
  });  