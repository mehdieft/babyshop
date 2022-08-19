import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import PrimaryButton from './components/primaryButton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './Screens/home';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';
import ContractionTimer from './Screens/ContractionTimer'
import KickCounter from './Screens/KickCounter';
import Settings from './Screens/Setting';
import WhatsUp from './Screens/WhatsUp';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import AuthProvider from './context/AuthProvider';
import { useAuth } from './context/AuthProvider';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';





const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="home" component={HomePage} />
    <Stack.Screen name="signUp" component={SignUp} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Contraction Timer" component={ContractionTimer} />
    <Stack.Screen name="Kick counter" component={KickCounter} />
    <Stack.Screen name="Whast up?" component={WhatsUp} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>

)

const Tab = createBottomTabNavigator();
const AppStck = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen options={{ tabBarIcon: () => <Entypo name="home" size={24} color="black" /> ,headerShown:false}} name="Home" component={StackNavigator} />
    <Tab.Screen options={{ tabBarIcon: () => <AntDesign name="dashboard" size={24} color="black" /> }} name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Contraction Timer"options={{ tabBarIcon: () => <Entypo name="squared-plus" size={24} color="black" />}}component={ContractionTimer} />
    <Tab.Screen name="Kick counter" component={KickCounter} options={{ tabBarIcon: () => <FontAwesome name="heart" size={24} color="red" /> }} />
    <Tab.Screen name="Whast up?" component={WhatsUp} options={{ tabBarIcon: () => <Fontisto name="nurse" size={24} color="black" /> }} />
    <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: () => <Feather name="settings" size={24} color="black" /> }} />
  </Tab.Navigator>
)
function App() {
  useEffect(()=>{
    console.log("userdata",userData)
  },[userData])
  const {userData}=useAuth();
  const {loading}=useAuth()
  console.log("fucking user data_______________",userData)
  if(loading){
    return (
      <ActivityIndicator style={{flex:1,justifyContent:'center',alignItems:'center'}} size="large" />
    )
  }else{
    return (
      <AuthProvider>
      <NavigationContainer> 
        
        {(userData.token && userData.token.trim().length>10)?  <StackNavigator/>:<AppStck/>}
     
      </NavigationContainer>
    </AuthProvider>

)
}

}


export default () => {
  return (
    <AuthProvider>
      <App />

    </AuthProvider>
  );
};