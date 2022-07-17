import {View,TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';
export default function SearchInput({placeholder}){
    const [text,changetext]=useState(null)
    
    return (
        <View style={{flexDirection:'row'}}>
            <TextInput onchange={onchange} placeholder={placeholder}></TextInput>

        </View>

    )
}