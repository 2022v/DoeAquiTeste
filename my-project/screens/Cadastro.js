import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function cadastro({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>

<View style={{ alignSelf:'center',width:'300',height:'60',alignItems:"center", paddingTop:50}} >
  <Avatar
  rounded
  size="xlarge"
  source={{
    uri:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/5026528-vector-illustration-female-avatar-in-flat-style-gr%C3%A1tis-vetor.jpg',
  }}
/>
</View>



<View style={{alignSelf:'center', backgroundColor:'white',alignItems:"center", top:'50px', width:'300px', height:'90px', borderRadius:"10px",borderWidth:'2px'}}>
<Button onPress={()=>navigation.navigate('')}  buttonStyle={{backgroundColor:"white",top:"20px", width:"150px", height:"50px"}} title="Pessoa Física" titleStyle={{color:'black'}}/>
</View>


<View style={{ alignSelf:'center', backgroundColor:'white',alignItems:"center", top:'80px', width:'300px', height:'90px', borderRadius:"10px", borderWidth:'2px'}}>
<Button onPress={()=>navigation.navigate('')}  buttonStyle={{backgroundColor:"white", top:"20px", width:"150px", height:"50px"}} title="Pessoa Jurídica" titleStyle={{color:'black'}}/>
</View>


<View style={{ alignSelf:'center', backgroundColor:'black',alignItems:"center", top:'150px', width:'300px', height:'55px', borderRadius:"30px"}}>
<Button onPress={()=>navigation.navigate('')}  style={{ top:'8px', alignItems:'center'}} buttonStyle={{backgroundColor:"black"}} title="Continuar" titleStyle={{color:"white"}}/>
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