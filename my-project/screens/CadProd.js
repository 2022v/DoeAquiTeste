import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
const backImage = require("../assets/Logo.png");

export default function CadProd({ navigation })
{

   

  return (
    <View style={styles.container}>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Cadastre um novo item</Text>
         <TextInput
        style={styles.input}
        placeholder="Nome Produto"
        
        
        
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Produto"
        keyboardType="desc"
       
        
      />
      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={''}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Excluir</Text>
      </TouchableOpacity>

      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "black",
    alignSelf: "center",
    paddingBottom: 24,
    marginTop:120
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    marginTop:5
  },
  backImage: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '70%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: 'black',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});