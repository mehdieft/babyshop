import {View,TouchableOpacity,TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

import { useState } from 'react';
export default function SearchInput(props){
    const [text,changetext]=useState(null)
    
    return (
        <View style={{flexDirection:'row',borderWidth:1,borderColor:props.color,height:40,alignItems:'center',justifyContent: 'space-between',paddingLeft:32,paddingRight:4,borderRadius:3}}>
            <TextInput style={{paddingRight:13}} onChangeText={changetext} placeholder={props.placeholder}></TextInput>
            <View style={{backgroundColor:props.color,borderRadius:5,justifyContent:'center',width:32,height:32,alignItems: 'center'}}>
            { props.children ? <View>{props.children}</View> :    <EvilIcons name="search" size={24} color="black" />}
            </View>

        </View>

    )
}