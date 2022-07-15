import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import PrimaryButton from './components/primaryButton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomePage  from './Screens/home';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';
import contractionTimer from './Screens/contractionTimer'
import KickCounter from './Screens/KickCounter';



const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={SignUp}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Contraction Timer" component={contractionTimer}/>
        <Stack.Screen name="Kick counter" component={KickCounter}  />
      </Stack.Navigator>
    </NavigationContainer>



  );
}


