import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';


export default function kit1({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column", padding: 0
  }]}>

<View style={{ flex: 0.2}} >


<Header 



backgroundColor="black"
leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
Component={{ icon: 'user', color: '#fff', iconStyle: { color: '#fff' } }}
centerComponent={{ text: 'Larissa Alves', style: { color: '#fff', fontSize:'20px'} }}
rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Icon
  onPress={()=>navigation.navigate('Home')}
  name='arrow-left'
  color='black' 
  size={20}/>

</View>



<View style={{ flex: 1, alignItems:"center"}}>
    
<Text style={{paddingTop:"8%", fontSize:"30px"}}> Kit Infantil</Text>
</View>

<View style={{ flex: 2, alignItems:"center"}} >
<Avatar
 
  size= {200}
  source={require('../../my-project/assets/kit.jpg')}
/>



</View>

<View style={{top:-100}}>

<Text style={{paddingTop:"2%", width:"200px", borderWidth:'2px', borderRadius:'10', 
alignSelf:'center', textAlign:'center', fontSize:'14px', borderRadius:'10px'}}> Kit Infantil Para crianças entre 4 a 6 anos.</Text>

<Button style={{ marginTop:70, width:180, paddingTop:'20px', alignSelf:'center'}}  buttonStyle={{backgroundColor:"black", borderRadius: 20}} title="Entre em contato" onPress={()=>navigation.navigate('Chat')}/>
  
</View>

</View>
);};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  backgroundColor:'white'
  },
  });