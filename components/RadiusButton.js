import {View,Text,TouchableOpacity} from 'react-native'
export default function RadiusButton({onpress,text,bgColor}){
    return (
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <TouchableOpacity OnPress={onpress} style={{backgroundColor:bgColor,borderRadius:30}} >
                <Text style={{paddingVertical:8,paddingHorizontal:40,color:'white',fontSize:16,textAlign:'center',lineHeight:24,weight:'600'}}>{text}</Text>
            </TouchableOpacity>
        </View>

    )
}