import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,SafeAreaView, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import {PrimaryButton} from './components/primaryButton'

export default function App() {
 function clickEvent(){
  console.log("typing")
 }
  return (

    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View>
      <View style={styles.container}>
        <View style={styles.babyIconInner}>
          <Image style={styles.babyIcon} source={require('./assets/baby.png')} />
        </View>
        <Text style={styles.textTitle}>wellcome to Growly</Text>
        <Text style={styles.textField}>Watch your baby grow, log your symptoms and learn what to expect week by week with Growly Pregnancy!</Text>
      </View>
      <View>
      <Image style={styles.vector} source={require('./assets/Vector.png')} resizeMode="cover" />
      <PrimaryButton clicked={clickEvent} title="get Started"/>

      </View>

    </View> 
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,


  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25396F',
    marginBottom: 8,
  },
  babyIconInner: {
    backgroundColor: '#3EB09B',
    borderRadius: 80,
    height: 156,
    width: 156,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18

  },
  babyIcon: {
    width: 92,
    height: 92,
  },
  textField: {
    textAlign: 'center',
    maxWidth: '50%',
    fontSize: 12,
    color: '#25396F',
  },
  vector: {
    width:'100%',
    height:500,   
  },
  footerVectorInner:{
    width:'100%',
    height:399
  }

});
