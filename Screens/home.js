import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import PrimaryButton from '../components/primaryButton'

export default  function HomePage(){
    function clickEvent() {
        console.log("typing")
      }
    return(
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
            <View style={styles.vector}>
              <Image source={require('./assets/Vector.png')} resizeMode="cover" />
              <View>
                <Text></Text>
              </View>
              <PrimaryButton  onPress={clickEvent} text='get started' />
            </View>
  
          </View>
          <ImageBackground source={require('./assets/Vector.png')} resizeMode="cover" style={styles.image}>
            <PrimaryButton style={styles.text} onPress={()=>navigation.navigate('')} text='get started' />
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 100,
      flexDirection: 'column-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: 18,
  
  
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height:400,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    footerVectorInner: {
      width: '100%',
      height: 399
    },
    primaryButton: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  
  });