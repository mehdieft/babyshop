import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import SignUpBottom from '../components/SignUpBottom';
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 






export default function SignUp({navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    function press() {
        console.log('press signUp');
    }



    return (

        <SafeAreaView >
            <ScrollView >
                <View>

                    <View style={{ width: '100%', height: 276, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, lineHeight: 45, width: 143, height: 90, marginTop: 104, marginLeft: 16, color: '#3EB09B' }}>Hello Wellcome</Text>
                        <Image source={require('../assets/babySignUp.png')} resizeMode="cover" />
                    </View>
                    <View style={{ marginHorizontal: 16 }}>

                        <View style={{ borderBottomWidth: 1, width: '98%', marginBottom: 50, }}>

                            <TextInput
                                style={{ fontSize: 16, marginHorizontal: 16, borderEndWidth: 2, color: '#3EB09B' }}
                                onChangeText={onChangeText}
                                value={text}
                            />
                        </View>



                        <View style={{ borderBottomWidth: 1, width: '98%', marginBottom: 32 }}>

                            <TextInput
                                style={{ fontSize: 16, marginHorizontal: 16, borderEndWidth: 2, color: '#3EB09B' }}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="useless placeholder"
                                keyboardType="numeric"
                            />
                        </View>
                        {/* <SignUpBottom text="signUp" color="#00866A" onPress={this.press}/> */}
                        <SignUpBottom style={{ marginRight: 160 }} title="signUp" color="#00866A" onclick={()=>navigation.navigate('Dashboard')} />
                    </View>
                    <Text style={{fontSize:14,color:'#7C7C7C',marginVertical:16,marginHorizontal:16}}>Or Sign In With</Text>
                    <View style={{flexDirection:'row',marginHorizontal:16}}>
                    <Fontisto style={{marginRight:8}} name="google" size={24} color="green" />
                    <FontAwesome5 style={{marginRight:8}} name="facebook-f" size={24} color="blue" />
                    <AntDesign name="twitter" size={24} color="blue" />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>




    );
}
