import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import PrimaryButton from '../components/primaryButton'

export default function HomePage({ navigation }) {
    function clickEvent() {
        console.log("typing")
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.headerConatiner} >
                        <View style={styles.babyIconInner}>
                            <Image style={styles.babyIcon} source={require('../assets/baby.png')} />
                        </View>
                        <Text style={styles.textTitle}>wellcome to Growly</Text>
                        <Text style={styles.textField}>Watch your baby grow, log your symptoms and learn what to expect week by week with Growly Pregnancy!</Text>
                    </View>
                </View>
                <ImageBackground source={require('../assets/Vector.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.text}>

                    <PrimaryButton  onPress={() => navigation.navigate('signUp')} text='get started' bgColor="#89D2C4" />
                    </View>
                    <View></View>
                </ImageBackground>
                <View style={styles.freeSpace}></View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        marginRight:20

    },
    freeSpace:{
        height:20
    },
    headerConatiner:{
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: 300,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: "#000000c0",
        marginBottom:20,
        
        alignSelf:'flex-end',
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