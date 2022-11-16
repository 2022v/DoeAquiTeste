import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import Tela1Screen from './screens/Tela1';
import cadastroScreen from './screens/Cadastro';
import cadastroPFScreen from './screens/CadastroPF';
import cadastroONGScreen from './screens/CadastroONG';
import LocalizacaoScreen from './screens/Localizacao';
import RecSenhaScreen from './screens/RecSenha';
import HomeScreen from './screens/Home';
import PerfilScreen from './screens/Perfil';
import Chat from './screens/Chat';


// function HomeScreen() {
// return (
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text>Home Screen</Text>
// </View>
// );
// }

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Perfil">
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
<Stack.Screen name="Tela1" component={Tela1Screen} options={{ headerShown: false }}/>
<Stack.Screen name="RecSenha" component={RecSenhaScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Cadastro" component={cadastroScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroPF" component={cadastroPFScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroONG" component={cadastroONGScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Localizacao" component={LocalizacaoScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>



</Stack.Navigator>
</NavigationContainer>
);
}

export default App;