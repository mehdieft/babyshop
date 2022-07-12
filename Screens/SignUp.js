import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
<<<<<<< HEAD
import SignUpBottom from '../components/SignUpBottom';
import Icon from 'react-native-vector-icons/FontAwesome';





=======
>>>>>>> parent of b44ce5c (installing icon)

export default function SignUp() {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
<<<<<<< HEAD
    function press() {
        console.log('press signUp');
    }



=======
>>>>>>> parent of b44ce5c (installing icon)
    return (

        <SafeAreaView >
            <ScrollView >
                <View>

<<<<<<< HEAD
                    <View style={{ width: '100%', height: 276, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, lineHeight: 45, width: 143, height: 90, marginTop: 104, marginLeft: 16, color: '#3EB09B' }}>Hello Wellcome</Text>
                        <Image source={require('../assets/babySignUp.png')} resizeMode="cover" />
                    </View>
                    <View style={{ marginHorizontal: 16 }}>
=======
            <View style={{ width: '100%', height: 276, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Image source={require('../assets/babySignUp.png')} resizeMode="cover" />
                <Text style={{ fontSize: 30, lineHeight: 45, width: 143, height: 90, marginTop: 104, marginRight: 16, color: '#3EB09B' }}>Hello Wellcome</Text>
            </View>
            <View style={{ marginHorizontal: 16 }}>
>>>>>>> parent of b44ce5c (installing icon)

                        <View style={{ borderBottomWidth: 1, width: '98%', marginBottom: 50, }}>

<<<<<<< HEAD
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
                        <SignUpBottom style={{ marginRight: 160 }} title="signUp" color="#00866A" onclick={press} />
                        const myButton = (
                      

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
=======
                    <TextInput
                        style={{ fontSize: 16, marginHorizontal: 16, borderEndWidth: 2,color:'#3EB09B' }}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>



                <View style={{ borderBottomWidth: 1, width: '98%' }}>

                    <TextInput
                        style={{ fontSize: 16, marginHorizontal: 16, borderEndWidth: 2,color:'#3EB09B' }}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </View>
            </View>
        </View>
>>>>>>> parent of b44ce5c (installing icon)




    );
}
