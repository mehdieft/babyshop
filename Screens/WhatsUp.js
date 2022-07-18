import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';
import IconButton from '../components/IconButton';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 





export default function WhatsUp() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.sympthoms}>symptoms</Text>
                <SearchInput color="#398AA5" placeholder="What’s your body telling you?" />
                <Text style={{ marginTop: 25, marginBottom: 10 }}>Recent</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
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








            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#E18AB6' }}>Medications</Text>
            <SearchInput color="#E7A1C5" placeholder="What Did You Take?" />
            <Text style={{ marginTop: 25, marginBottom: 10 }}>Recent</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
                <IconButton color="#E18AB6" text="Bendary">
                    <Octicons name="check-circle-fill" size={24} color="#E18AB6" />
                </IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="Tylenol"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="Endometrin"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="Claritin"></IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10 }}>Selected</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
                <IconButton color="#E18AB6" text="Bendary">
                    <Octicons name="check-circle-fill" size={24} color="#E18AB6" />
                </IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#E18AB6' }}>Mood</Text>
            <SearchInput color="#45A4A7" placeholder="I feel..." />
            <Text style={{ marginTop: 25, marginBottom: 10 }}>Recent</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
                <IconButton bgColor="white" color="#ACACAC" text="calm"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="moody"></IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="in love">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="#B0D0DB" color="#ACACAC" text="weepy">
                    <Octicons name="check-circle-fill" size={24} color="#398AA5" />
                </IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="worried"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="angry"></IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="overwhelmed"></IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10 }}>Selected</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 2 }}>
                <IconButton bgColor="white" color="#ACACAC" text="calm">
                    <MaterialIcons name="cancel" size={24} color="#6AB6B9" />
                </IconButton>
                <IconButton bgColor="white" color="#ACACAC" text="moody">
                    <MaterialIcons name="cancel" size={24} color="#6AB6B9" />
                </IconButton>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#00866A' }}>Cycle Length</Text>
            <SearchInput color="#00866A" placeholder="24 Days" ><FontAwesome5 name="calendar-day" size={24} color="white" /></SearchInput>

            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#1AB0B0' }}>Sleep</Text>
            <SearchInput color="#1AB0B0" placeholder="24 Days" ><FontAwesome5 name="calendar-minus" size={24} color="white" /></SearchInput>

            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#7A0B44' }}>Temprature</Text>
            <SearchInput color="#7A0B44" placeholder="24 Days" ><MaterialCommunityIcons name="temperature-fahrenheit" size={24} color="white" /></SearchInput>

            <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#7B97A5' }}>Weight</Text>
            <SearchInput color="#7B97A5" placeholder="24 Days" ><MaterialCommunityIcons name="weight-kilogram" size={24} color="white" /></SearchInput>

            <View style={{ height: 120 }}></View>




        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', margin: 16, padding: 16, height: '100%'
    },
    sympthoms: { marginTop: 8, color: '#398AA5', fontSize: 14, fontWeight: '500', lineHeight: 21, marginBottom: 20 }
})