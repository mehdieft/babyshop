import { View, Text } from "react-native";

export default function CardComponent({ h1, t1, h2, t2 }) {
    return (
        <View>
            <View style={{ flexDirection: 'row',justifyContent:'space-around' ,marginTop:16,width:'80%' }}>

                <Text style={{ fontSize: 10, color: '#00866A', marginRight: 70 }}>{h1}</Text>
                <Text style={{ fontSize: 10, color: '#00866A' }}>{h2}</Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent:'space-around' ,marginTop:16,width:'80%'}}>
                <Text style={{ fontSize: 14, paddingTop:4,paddingRight:65,paddingLeft:16  }}>{t1}</Text>
                <Text style={{ fontSize: 14, paddingTop:4 ,paddingLeft:65 }}>{t2}</Text>
            </View>



        </View>
    )
}