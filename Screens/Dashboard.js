import {View,Text,Image,ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'







export default function Dashboard() {
    return (
        <View style={{marginVertical:16,marginHorizontal:16}}>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontSize:12,marginBottom:4,color:'#25396F'}}>Good Morning</Text>
                    <Text style={{fontSize:24,color:'#25396F'}}>Annete</Text>
                </View>
                <Image source={require('../assets/icons/anne.png')} style={{borderRadius:40,width:60,height:60}} />

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{width:160,height:151,}}>
                    <ImageBackground ></ImageBackground>
                </View>
                <View></View>
            </View>
           

        </View>
    )
}