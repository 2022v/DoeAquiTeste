import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
 
 
 
 
export default function Chat({route,navigation}){
 
 
 return (
 
 <View style={[styles.container, {
 flexDirection: "column", padding:0
 }]}>
 


<View style={{ flex: 0.5}}>

<Header

backgroundColor="black"
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  Component={{ icon: 'user', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent= {{ text: 'Larissa Alves', style: { color: '#fff', fontSize:20}}}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

</View>



<View style={{ flex: 2, alignItems:"center", paddingTop:50}}>
<Text style={{width:400, borderWidth:2, borderRadius:10, alignSelf:'flex-start', fontSize:20, borderRadius:10}}> Olá tudo bem?  </Text>
<Text style={{width:400, borderWidth:2, borderRadius:10, alignSelf:'flex-end', fontSize:20, borderRadius:10}}> Como posso Ajudar?  </Text>





</View>


<View style={{paddingTop:'40%'}}>

<Input rightIcon={
  <Icon
    name="arrow-right"
    size={20}
    color="black"
  />}  style={{width:300, borderWidth:2, borderRadius:10}} placeholder={"Digite Aqui."}  />
  </View>


</View>
);};
 
const styles = StyleSheet.create({
 container: {
 flex: 1,
 padding: 20,
 backgroundColor:'White'
 },
  });