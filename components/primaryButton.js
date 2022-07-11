import {TouchableOpacity,StyleSheet} from 'react-native'

function PrimaryButton(props){
    return (
        <View>
            <TouchableOpacity onPress={props.clicked} style={style.primaryBtn}>
                <Text style={style.btnText}>{props.title}</Text>
            </TouchableOpacity>

        </View>

    );


}
const style=StyleSheet.create({
    primaryBtn:{
        paddingVertical: 12,
        paddingHorizontal:120,
        borderRadius:20,
        backgroundColor:'#89D2C4',
    },
    btnText:{
        fontSize:16,
        alignSelf:'center',
        color:'#F2F6FC',

    }

})





export default PrimaryButton