import {View,StyleSheet,Text} from 'react-native';




export default function DataTable({header,content}){
    return (
        <View style={styles.body}>
            <View>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.content}>{content}</Text>
            </View>
            
            
        </View>
    )
}
const styles= StyleSheet.create({
    body:{
        flexDirection: 'row',
        width:'80%',
        justifyContent: 'space-between',

    },
    header:{
        color:'#ACACAC',fontSize:10,lineHeight:15,marginBottom:8
    },
    content:{
        color:'#282828',lineHeight:21,fontSize:14

    }
})