import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import PrimaryButton from './components/primaryButton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomePage  from './Screens/home';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';
import ContractionTimer from './Screens/ContractionTimer'
import KickCounter from './Screens/KickCounter';
import Setting  from './Screens/Setting';
import WhatsUp from './Screens/WhatsUp';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={SignUp}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Contraction Timer" component={ContractionTimer}/>
        <Stack.Screen name="Kick counter" component={KickCounter}  />
        <Stack.Screen name="Settings" component={Setting}/>
        <Stack.Screen name="Whast up?" component={WhatsUp}/>
      </Stack.Navigator>
    </NavigationContainer>



  );
}


