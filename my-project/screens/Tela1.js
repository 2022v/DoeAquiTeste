import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
 
 
 
 
export default function Tela1({route,navigation}){
 
 
 return (
 
 <View style={[styles.container, {
 flexDirection: "column"
 }]}>
 
<View style={{ flex: 1,alignItems:"center", paddingTop:50}} >
<Image
 source={require('../../my-project/assets/Logo.png')}
 style={{ marginTop:200, width: 400, height: 200 }}
/>
 
<Text style={{ marginTop:20, color:'white', fontSize:30}} h1> DOE AQUI! </Text>
 
</View > 
 
<View style={{ flex: 1,alignItems:"center", paddingTop:50, marginTop:200}} >
<Button style={{ marginTop:100}} buttonStyle={{backgroundColor:'white', borderRadius:30, width:200, height:60}} titleStyle={{color:'black', fontSize:20}} type="clear" title="Doe Agora!" onPress={()=>navigation.navigate('Login')}/>
</View>
</View>
);};
 
const styles = StyleSheet.create({
 container: {
 flex: 1,
 padding: 20,
 backgroundColor:'black'
 },
  });