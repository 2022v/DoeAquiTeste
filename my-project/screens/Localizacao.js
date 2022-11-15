import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Localizacao({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>

<View style={{ flex: 0.3}} >

<Icon
  onPress={()=>navigation.navigate('Cadastro')}
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



<View style={{ flex: 2, alignItems:"center", paddingTop:50}}>
<Input   style={{width:"300px"}} placeholder={' Cep'}/>
<Input   style={{width:"300px"}} placeholder={' Rua'}/>
<Input   style={{width:"300px"}} placeholder={' Bairro'}/>
<Input   style={{width:"300px"}} placeholder={"Cidade"}  />
<Input   style={{width:"300px"}} placeholder={"Estado"}  />

</View>

<View style={{ flex: 1, alignItems:"center"}}>
<Button style={{ marginTop:50, width:150}} buttonStyle={{backgroundColor:"black", borderRadius: 20}} title="Cadastrar-se" onPress={()=>navigation.navigate('Login')}/>

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