import {View , StyleSheet} from 'react-native'
export default function ImageComponent({bgColor,header,content}){
    return (
        <View style={{backgroundColor:bgColor,marginBottom:16, flexDirection:'row',}}>
            {props.children}
            <View>
                <Text style={{fontSize:12,paddingBottom: 8}}>{header}</Text>
                <Text style={{fontSize:10}}>{content}</Text>
            </View>

        </View>
    )
}
