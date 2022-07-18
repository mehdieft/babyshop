import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';
import IconButton from '../components/IconButton';
import { Octicons } from '@expo/vector-icons';



export default function WhatsUp() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.sympthoms}>symptoms</Text>
                <SearchInput color="#398AA5" placeholder="What’s your body telling you?" />
                <Text style={{ marginTop: 25, marginBottom: 10 }}>Recent</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2}}>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="fatisue / exhaustion"></IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="dizziness">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="morning sickness / nausea">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="shortness of breath"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="acen"></IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10 }}>Selected</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
                <IconButton bgColor="white" color="#ACACAC" text="nothing"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="fatisue / exhaustion"></IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10,fontSize:16,color: '#E18AB6' }}>Medications</Text>
            <SearchInput color="#E7A1C5" placeholder="What Did You Take?" />


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', margin: 16, padding: 16, height: '50%'
    },
    sympthoms: { marginTop: 8, color: '#398AA5', fontSize: 14, fontWeight: '500', lineHeight: 21, marginBottom: 20 }
})