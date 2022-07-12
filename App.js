import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import PrimaryButton from './components/primaryButton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomePage  from './Screens/home';
import SignUp from './Screens/SignUp';



const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>



  );
}


