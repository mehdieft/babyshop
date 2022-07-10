import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';

export default function App() {
  const window = useWindowDimensions();
  return (

    <View>
      <View style={styles.container}>
        <View style={styles.babyIconInner}>
          <Image style={styles.babyIcon} source={require('./assets/baby.png')} />
        </View>
        <Text style={styles.textTitle}>wellcome to Growly</Text>
        <Text style={styles.textField}>Watch your baby grow, log your symptoms and learn what to expect week by week with Growly Pregnancy!</Text>
      </View>
      <Image style={styles.vector} source={require('./assets/Vector.png')} />

    </View>

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
    height:339,
  },

});
