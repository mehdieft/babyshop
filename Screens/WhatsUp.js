import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';
import IconButton from '../components/IconButton';
import { Octicons } from '@expo/vector-icons'; 



export default function WhatsUp(){
    return (
        <ScrollView style={styles.container}>
        <View>
            <Text style={styles.sympthoms}>symptoms</Text>
            <SearchInput  color="#398AA5"   placeholder="What’s your body telling you?"     />
            <Text>Recent</Text>
        </View>
            <View style={{ flexDirection:'row',flexWrap:'wrap'}}>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="nothing">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="nothing">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>

                
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