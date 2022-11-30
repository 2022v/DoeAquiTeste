import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../config/firebase';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function Login({route,navigation}){


  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (

  <View style={[styles.container, {
  flexDirection: "column"
  }]}>




<View style={{ flex: 1,alignItems:"center", paddingTop:50}} >




  <Avatar
  rounded
  size="xlarge"
  source={require('../../my-project/assets/Logo.png')}

/>
</View>


<View style={{ flex: 1, alignItems:"center", paddingTop:20}}>
<Input  leftIcon={{ type: 'font-awesome', name: 'user', color:'black' }}
 placeholder={' login'}
 value={login}
                onChangeText={login => setLogin(login)}
                textContentType={'emailAddress'}
                maxLength={255}/>
<Input  leftIcon={{ type: 'font-awesome', name: 'lock' , color:'black'}}
 placeholder={" senha"} 
 value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                maxLength={255} />
</View>

<View style={{ flex: 1, alignItems:"center", paddingTop:20}}>
<Button title="Entrar" style={{ marginTop:50, width:150}} 
buttonStyle={{backgroundColor:"black", borderRadius: 20}}
onPress={() => {
  signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
          navigation.navigate('Home');
          setLogin('');
          setPassword('');
      })
      .catch((error) => {
          showMessage({
              message: 'E-mail ou senha incorretos',
              type: 'danger',
          });
      })
}}
/>

<Button style={{ marginTop:20, width:150}} title="Cadastre-se" buttonStyle={{backgroundColor:"black",  borderRadius: 20}} onPress={()=>navigation.navigate('Cadastro')}/>

<Button style={{ marginTop:20, width:200}} title="Esqueceu a Senha?"  titleStyle={{color: "black"}} buttonStyle={{backgroundColor:"white"}} onPress={()=>navigation.navigate('RecSenha')}/>


<Button style={{ marginTop:20, width:200}} title="Perfil?"  titleStyle={{color: "black"}} buttonStyle={{backgroundColor:"white"}} onPress={()=>navigation.navigate('Perfil')}/>

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