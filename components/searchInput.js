import {View,TouchableOpacity,TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

import { useState } from 'react';
export default function SearchInput({placeholder,color}){
    const [text,changetext]=useState(null)
    
    return (
        <View style={{flexDirection:'row',borderWidth:1,borderColor:color,height:40,alignItems:'center',justifyContent: 'space-between',paddingLeft:32,paddingRight:4,borderRadius:3}}>
            <TextInput style={{paddingRight:13}} onChangeText={changetext} placeholder={placeholder}></TextInput>
            <View style={{backgroundColor:color,borderRadius:5,justifyContent:'center',width:32,height:32,alignItems: 'center'}}>
            <EvilIcons name="search" size={24} color="black" />
            </View>

        </View>

    )
}