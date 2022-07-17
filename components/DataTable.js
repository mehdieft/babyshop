import {View,StyleSheet,Text} from 'react-native';




export default function DataTable({header,content}){
    return (
        <View >
          
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.content}>{content}</Text>
          
            
            
        </View>
    )
}
const styles= StyleSheet.create({
   
    header:{
        color:'#ACACAC',fontSize:10,lineHeight:15,marginBottom:8
    },
    content:{
        color:'#282828',lineHeight:21,fontSize:14

    }
})