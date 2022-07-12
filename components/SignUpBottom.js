import {View,TouchableOpacity,Text} from 'react-native'

export default function SignUpBottom({color,onclick,title}){
    return (
        <View>
            <TouchableOpacity  onPress={onclick}>
                <View style={{paddingVertical:12,paddingHorizontal:16,backgroundColor:color,borderRadius: 20,width:184}}>
                    <Text style={{fontSize:16,alignSelf: 'center',color:'#F2F6FC'}}>{title}</Text>
                </View>
            </TouchableOpacity>

        </View>

    )
}