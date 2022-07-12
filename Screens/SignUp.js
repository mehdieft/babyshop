import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

export default function SignUp() {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return (

        <View>

            <View style={{ width: '100%', height: 276, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Image source={require('../assets/babySignUp.png')} resizeMode="cover" />
                <Text style={{ fontSize: 30, lineHeight: 45, width: 143, height: 90, marginTop: 104, marginRight: 16, color: '#3EB09B' }}>Hello Wellcome</Text>
            </View>
            <View style={{ marginHorizontal: 16 }}>

                <View style={{ borderBottomWidth: 1, width: '98%', marginBottom: 50, }}>

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




    );
}
