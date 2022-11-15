import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function CadastroPF({route,navigation}){


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
<Input  leftIcon={<Icon name='user'size={24} color='black'/>} style={{width:"300px"}} placeholder={' Nome Completo'}/>
<Input  leftIcon={<Icon name='envelope'size={24} color='black'/>}  style={{width:"300px"}} placeholder={' Email'}/>
<Input  leftIcon={<Icon name='lock'size={24} color='black'/>} placeholder={" Senha"} secureTextEntry={true} />
</View>

<View style={{ flex: 1, alignItems:"center"}}>
<Button style={{ marginTop:50, width:150}} buttonStyle={{backgroundColor:"black", borderRadius: 20}} title="Continuar" onPress={()=>navigation.navigate('Localizacao')}/>

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