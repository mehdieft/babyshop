import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { react } from 'react'

export default function PrimaryButton({text,onPress,bgColor}) {
    return (

        <TouchableOpacity onPress={onPress} style={{ paddingVertical: 12,paddingHorizontal: 120,borderRadius: 20,backgroundColor: bgColor,}}>
            <View>
                <Text style={style.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>



    );


}
const style = StyleSheet.create({
    primaryBtn: {
        paddingVertical: 12,paddingHorizontal: 120,borderRadius: 20,backgroundColor: '#89D2C4',
    },
    btnText: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#F2F6FC',

    }

})





