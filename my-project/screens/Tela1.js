import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import cadastro from "./Cadastro";

export default function Tela1({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>
  
<View >
<Button onPress={()=>navigation.navigate('cadastro')}style={{ marginTop:50}} title="Entrar"/>
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