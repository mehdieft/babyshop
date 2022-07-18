import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RadiusButton from '../components/RadiusButton';
import { AntDesign } from '@expo/vector-icons';
import DataTable from '../components/DataTable';
import { FontAwesome } from '@expo/vector-icons';










export default function ContractionTimer() {
    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.headerIconInner.main}>
                    <Text style={styles.headerIconInner.text}>Contraction Timer</Text>
                    <MaterialCommunityIcons name="plus-circle" size={48} color="#1AB0B0" />
                </View>
                <View style={styles.mainHeaderContent.main}>
                    <Text style={styles.mainHeaderContent.text2}>01:16</Text>
                    <Text style={styles.mainHeaderContent.text1}>Duration</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 24,marginTop:41,marginBottom:41 }} >
                        <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 17, paddingVertical: 11, textAlign: 'center', height: 48, width: 84 ,alignItems: 'center'}}>
                            <FontAwesome   style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <FontAwesome  style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <Text style={{color:'#ACACAC'}}>Low</Text></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor:"#D1EFEF",flexDirection: 'row', paddingHorizontal: 17, paddingVertical: 11, textAlign: 'center', height: 48, width: 84,alignItems: 'center',borderRadius:24 }}>
                            <FontAwesome style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <FontAwesome style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <Text style={{color:'#ACACAC'}}>Med</Text></TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 17, paddingVertical: 11, textAlign: 'center', height: 48, width: 84 ,alignItems: 'center'}}>
                            <FontAwesome style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <FontAwesome style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <FontAwesome style={{padding:2}} name="flash" size={12} color="#ACACAC" />
                            <Text style={{color:'#ACACAC'}}>High</Text></TouchableOpacity>
                    </View>

                    <RadiusButton text="stop" onpress={() => alert('stop')} bgColor='#1AB0B0' />

                    <View style={styles.content.main}>
                        <ImageBackground source={require('../assets/icons/Vector.png')} style={styles.content.imageBackground} resizeMode="cover" >
                            <Text style={{ marginVertical: 6, color: '#FFFFFF', marginLeft: 16, }}>Your baby at Week 10</Text>
                            <AntDesign name="addfolder" size={20} color="white" />
                        </ImageBackground>
                        <View style={{ marginHorizontal: 16 }}>


                        </View>
                    </View>


                </View>
                <View style={{ marginHorizontal: 16 }}>

                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                            <Text style={styles.content.headerText}>last record</Text>
                            <Text style={styles.content.headerText2}>27 Jan 2022</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.content.table}>
                        <View style={styles.content.tableRow}>
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                        </View>
                        <Text style={styles.content.headerText}>last record</Text>
                        <View style={styles.content.tableRow}>
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                        </View>
                        <Text style={styles.content.headerText}>last record</Text>
                        <View style={styles.content.tableRow}>
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                            <DataTable header="Time" content="3:32 pm" />
                        </View>

                    </View>

                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', margin: 16, padding: 16, height: '50%'
    },
    headerIconInner: {
        main: {
            flexDirection: 'row', justifyContent: 'flex-end',

        },
        text: {
            fontSize: 14, lineHeight: 18, fontWeight: '400', marginTop: 16, marginRight: 8, marginBottom: 46
        }

    },
    mainHeaderContent: {
        main: {
            justifyContent: 'center', alignItems: 'center',
        },
        imagee: {
            width: 100,
            height: 100,
            padding: 18.65,
            borderRadius: 50,
            borderColor: '#EE6093',
            borderWidth: 1, marginBottom: 24
        }, text1: { fontSize: 14, lineHeight: 22, color: '#464646', fontWeight: '400', marginBottom: 8 },
        text2: { fontSize: 36, lineHeight: 36, color: '#212121', fontWeight: '400', marginBottom: 4 },
        text3: { fontSize: 10, lineHeight: 15, color: '#282828', fontWeight: '400', marginBottom: 32 }

    },
    content: {
        main: { width: '100%', height: 32, backgroundColor: '#EE6093', marginTop: 48 },
        headerText: { fontWeight: '550', lineHeight: 21, fontSize: 21, marginBottom: 16 },
        headerText2: { fontWeight: '400', lineHeight: 15, fontSize: 10 },
        imageBackground: { paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
        table: { marginBottom: 16, marginHorizontal: 16 },
        tableRow: {
            flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#464646', marginBottom: 16, paddingBottom: 16
        }

    }
})