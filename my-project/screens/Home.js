import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import {  Image, ScrollView } from 'react-native'
import { Card, ListItem } from 'react-native-elements'


export default function Home({route,navigation}){


  return (

  <View style={[styles.container, {
  flexDirection: "column", padding: 0
  }]}>

<View style={{ }} >

<Header 

backgroundColor="black"
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'DoeAqui', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

</View>

<View style={{ flex: 1}}> 
<ScrollView>
  <Card>
   <Card.Title>Kit Infantil</Card.Title>
   <Card.Divider/>
   <Card.Image source={require('../assets/kit.jpg')} onPress={()=>navigation.navigate("kit1")}>
   </Card.Image>
  </Card>

  <Card>
   <Card.Title>Kit Infantil</Card.Title>
   <Card.Divider/>
   <Card.Image source={require('../assets/kit.jpg')} onPress={()=>navigation.navigate("kit1")}>
   </Card.Image>
  </Card>

  <Card>
   <Card.Title>Kit Infantil</Card.Title>
   <Card.Divider/>
   <Card.Image source={require('../assets/kit.jpg')} onPress={()=>navigation.navigate("kit1")}>
   </Card.Image>
  </Card>

  <Card>
   <Card.Title>Kit Infantil</Card.Title>
   <Card.Divider/>
   <Card.Image source={require('../assets/kit.jpg')} onPress={()=>navigation.navigate("kit1")}>
   </Card.Image>
  </Card>
  </ScrollView> 
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