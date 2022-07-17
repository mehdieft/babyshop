import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';


export default function WhatsUp(){
    return (
        <ScrollView style={styles.container}>
        <View>
            <Text style={styles.sympthoms}>symptoms</Text>
            <SearchInput  color="#398AA5"   placeholder="What’s your body telling you?"     />
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', margin: 16, padding: 16, height: '50%'
    },
    sympthoms:{marginTop:8,color:'#398AA5',fontSize:14,fontWeight:'500',lineHeight:21,marginBottom:20}
})