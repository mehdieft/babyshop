import {View , StyleSheet,Text} from 'react-native'
export default function ImageComponent(props){
    return (
        <View elevation={15} style={{backgroundColor:props.bgColor,marginBottom:16, flexDirection:'row',borderRadius:5}}>
            {props.children}
            <View style={{marginVertical:16}}>
                <Text style={{fontSize:12,paddingBottom: 8,color:'#FFFFFF'}}>{props.header}</Text>
                <View style={{height:33,width:191}}>
                <Text style={{fontSize:10,paddingRight:8,textAlign: 'left',color:'#FFFFFF'}}>{props.content}</Text>
                </View>
            </View>

        </View>
    )
}
