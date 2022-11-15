import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function RecSenha({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>


<View style={{ flex: 0.3}} >

<Icon
  onPress={()=>navigation.navigate('Login')}
  name='arrow-left'
  color='black' 
  size={20}/>

</View>

<View style={{ flex: 1,alignItems:"center", paddingTop:50}} >




  <Avatar
  rounded
  size="xlarge"
  source={require('../../my-project/assets/Logo.png')}

/>
</View>



<View style={{ flex: 1, alignItems:"center", paddingTop:20}}>
<Input   leftIcon={<Icon name='envelope'size={24} color='black'/>} style={{width:"300px"}} placeholder={' Insira o email cadastrado'}/>
</View>

<View style={{ flex: 2, alignItems:"center", paddingTop:20}}>

<Button style={{ marginTop:20, width:150}} title="Recuperar" buttonStyle={{backgroundColor:"black",  borderRadius: 20}} onPress={()=>navigation.navigate('Login')}/>


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