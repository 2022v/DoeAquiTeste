import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Cadastro({route,navigation}){


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



<View style={{ flex: 2,alignItems:"center", paddingTop:50}} >
<Button 
icon={
  <Icon
    name="user"
    size={30}
    color="black"
  />}
onPress={()=>navigation.navigate('CadastroPF')} 
buttonStyle={{backgroundColor:"white",
              width:"300px", 
              height:"90px",
              borderColor:'black',
              borderWidth:2, 
              borderRadius:"10px"}}
               title=" Pessoa Física" titleStyle={{color:'black'}}
               />

<Button 
style={{marginTop:10}}
 icon={
  <Icon
    name="user"
    size={30}
    color="black"
  />}
onPress={()=>navigation.navigate('CadastroONG')}  
buttonStyle={{backgroundColor:"white", 
              width:"300px", 
              height:"90px",
              borderColor:'black',
              borderWidth:2, 
              borderRadius:"10px"}}
               title="ONG" titleStyle={{color:'black'}}/>

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