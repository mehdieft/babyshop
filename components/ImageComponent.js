import {View , StyleSheet,Text} from 'react-native'
export default function ImageComponent(props){
    return (
        <View style={{backgroundColor:props.bgColor,marginBottom:16, flexDirection:'row',}}>
            {props.children}
            <View style={{marginVertical:16}}>
                <Text style={{fontSize:12,paddingBottom: 8}}>{props.header}</Text>
                <Text style={{fontSize:10}}>{props.content}</Text>
            </View>

        </View>
    )
}
