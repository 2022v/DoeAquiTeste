import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';

import { Card, ListItem, Button, Icon } from 'react-native-elements';



const Avatar = require("../assets/Avatar.png");



    
const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            
            headerRight: () => (
                
<TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Perfil")}
    >
      <Image source={Avatar}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }} />
    </TouchableOpacity>
  
            ),
        });
    }, [navigation ]);

    return (

 <View >

<View style={{backgroundColor:'white' }}>
<TouchableOpacity
    onPress={() => navigation.navigate("CadProd")}
    style={styles.chatButton}
>
    <Entypo name="plus" size={20} color={colors.lightGray} />
</TouchableOpacity>

<TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={20} color={colors.lightGray} />
</TouchableOpacity>
 
 </View>
       
<View style={styles.container}>

<View style={{bottom: 480, right:40, width: 350, flex:0.3}}>
{/* <ScrollView> */}


<Card style={{width:100}} >
  <Card.Title>Kit Infantil</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/kit.jpg')} onPress={() => navigation.navigate("Produto")}>
    <Text style={{marginBottom: 10, top:100}}>
    </Text>
    
  </Card.Image>

</Card>


<Card style={{width:100}}>
  <Card.Title>Bermudas Lacoste</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/lacoste.jpeg')}>
    <Text style={{marginBottom: 10, top:100}}>
    </Text>
    
  </Card.Image>

</Card>

<Card style={{width:100}}>
  <Card.Title>Tênis Nike</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('../assets/nike.jpg')}>
    <Text style={{marginBottom: 10, top:100}}>
    </Text>
    
  </Card.Image>

</Card>
{/* </ScrollView> */}

</View>

           


        </View>
        </View>     




       
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: "#fff",
           
        },
      
        chatButton: {
          marginTop:20,
          backgroundColor: colors.primary,
          height: 40,
          width: 40,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: colors.primary,
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: .9,
          shadowRadius: 8,
          marginLeft: 350,
      },
    });