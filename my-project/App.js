import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import Tela1Screen from './screens/Tela1';


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
<Stack.Navigator initialRouteName="Tela1">
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Tela1" component={Tela1Screen} />



</Stack.Navigator>
</NavigationContainer>
);
}

export default App;