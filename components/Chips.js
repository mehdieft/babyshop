import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { react } from 'react'



export default function Chips({title,onpress}){
    return (
        <TouchableOpacity style={styles.chips} Onpress={onpress}>
            <View>
                <Text style={styles.chipsText}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    chips:{
        paddingVertical:4, 
        paddingHorizontal:16, 
        backgroundColor:'#89D2C4',
        borderRadius: 20,
    },
    chipsText:{
        fontSize: 12,
        alignSelf: 'center',
        color: '#FFFFFF',

    }
})