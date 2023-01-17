import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Perfil({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>



<View style={{ flex: 3,alignItems:"center", paddingTop:50}} >



<Text style={{ marginTop:20, color:'black', fontSize:30}} h1>Larissa Alves</Text>
 
  <Avatar
  rounded
  size="xlarge"
  source={{
    uri:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
  }}
/>


<Text style={{ marginTop:20, color:'black', fontSize:18}} h6>Itens Doados:</Text>
 
</View>


<View style={{ flex: 1, alignItems:"center", paddingTop:50}}>
<Button style={{ marginTop:50, width:200}} buttonStyle={{backgroundColor:"black", borderRadius: 20}} title="Entrar em Contato" onPress={()=>navigation.navigate('Chat')}/>

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