import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
 
 
 
 
export default function Chat({route,navigation}){
 
 
 return (
 
 <View style={[styles.container, {
 flexDirection: "column"
 }]}>
 
<View style={{borderWidth:2,width:'2000px', alignSelf:"center", alignItems:'center', backgroundColor:'black'
            }}> 

    <Button lefticon={
  <Icon
    name="user"
    size={24}
    color="white"
  />} buttonStyle={{backgroundColor:"white",
              width:"300px", 
              height:"90px",
              borderColor:'black',
              backgroundColor:'black',
              borderWidth:2,
              borderRadius:"10px"}}
               title="Larissa Alves" titleStyle={{color:'white'}}
               />

               


</View>


<View style={{borderWidth:2, alignSelf:"center", alignItems:'center', backgroundColor:'', top:'80%', borderRadius:'25px'
            }}> 


<Input  rightIcon={<Icon name='arrow-right'size={18} color='black'/>} style={{width:"1800px", height:'20px', bottom:'1%'}} placeholder={'Digite Aqui!'}/>


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