import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class Profile extends Component {


  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>My Profile</Text>
          <Image style={styles.avatar} source = {require('../assets/profile_photo1.png')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>Topic: Technology</Text>
              <Text style={styles.info}>Genre: UX Designer / Mobile developer</Text>
            </View>
            <View style={styles.profileDetail}>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Blogs</Text>
                <Text style={styles.count}>20</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Followers</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Follows</Text>
                <Text style={styles.count}>200</Text>
              </View>
            </View>
          </View>
        <ScrollView style={{marginTop:75}}>
          <View style={styles.se}>
          
            <View style={styles.content}>
              <Text style={styles.topic}>Design with React Native</Text>
              <br></br>
              <Text style={styles.gen}>Genre : Technology</Text> 
                <br></br>
              <Text style={styles.auth}>John Doe: 30m ago</Text>   
              <View style={styles.img3} >
                <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
              </View>
            </View> 
            <Text style={styles.num}>250</Text>  
          </View>
          <View style={styles.se}>
            <View style={styles.content}>
              <Text style={styles.topic}>Flutter Animations</Text>
              <br></br>
              <Text style={styles.gen}>Genre : Technology</Text> 
                <br></br>
              <Text style={styles.auth}>John Doe: 5d ago</Text>   
              <View style={styles.img3} >
                <Image  source={require('../assets/hope.png')} style={styles.imgrate}/>      
              </View>
            </View> 
            <Text style={styles.num}>250</Text>  
          </View>
        </ScrollView>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 73,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:88,
    backgroundColor:'blue',

  },
  body:{
    marginTop:100,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:22,
    color: "#3F3F3F",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#666666",
    marginTop:10
  },
  header:{
    fontSize:22,
    marginTop:50,
    marginLeft:25,
    fontWeight:"700",
    color:"#666666"
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:140,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#FCD5CC"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:15,
    color: "#999999"
  },
  count:{
    fontSize:18,
  },
  container:{
    backgroundColor:"#FCD5CC"
  },
  se:{
    height:'125px',
    backgroundColor:'#FAC6C9',
    borderRadius:15,
    marginBottom:3,
    marginLeft:3,
    marginTop:3,

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
 
  content:{

    position: 'absolute',
    // backgroundColor:'#EBAAB0',
    height:'120px',
    width:'250px',
    left:18,
    top:0,
    
    
  },
  img3:{
    position: 'absolute',
    height:'50px',
    width:'50px',
    left:295,
    
    borderRadius:100,
    elevation:8,
    overflow:'hidden',
    top:60,
   bottom:0

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