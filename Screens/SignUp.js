import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

export default function SignUp() {
    return (
        <SafeAreaView>
            <ScrollView >
             <View style={{width:'100%',height:276,backgroundColor:'red',flexDirection:'space-between'}}>
                <Text style={{fontSize:30,lineHeight:45,color:'#3EB09B'}}>Hello Wellcome</Text>
                <Image source={require('../assets/babySignUp.png')} resizeMode="cover" />
             </View>


            </ScrollView>
        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-between'
    },
    textInner: {
        width: 43,
        height: 90,
        backgroundColor: 'black',
    },
    textHeader: {
        color: '#3EB09B',
        fontSize: 30,
        lineHeight: 45,
        marginTop: 130
    },
    imageCover: {
        height: 277,
        width: 261
    }

})