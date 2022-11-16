import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';


export default function Home({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>

<View style={{ flex: 0.3}} >

<Header 

backgroundColor="black"
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'DoeAqui', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

</View>

<View style={{ flex: 1, alignItems:"center", paddingTop:20}}>
<Button style={{ marginTop:50, width:150}} buttonStyle={{backgroundColor:"black", borderRadius: 20}} title="Entrar" onPress={()=>navigation.navigate('kit1')}/>



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