import { View, Text, StyleSheet,Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function KickCounter() {
    return (
        <View style={styles.container}>
            <View style={styles.headerIconInner.main}>
                <Text style={styles.headerIconInner.text}>this is kick counter</Text>
                <MaterialCommunityIcons name="plus-circle" size={48} color="#EE6093" />
            </View>
            <View style={styles.mainHeaderContent.main}>
                <Text>kicks</Text>
                <Text>07</Text>
                <Image source={require('../assets/icons/babyCounter.png')} style={styles.mainHeaderContent.image} />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', margin: 16, padding: 16
    },
    headerIconInner: {
        main: {
            flexDirection: 'row', justifyContent: 'flex-end',

        },
        text: {
           fontSize: 14, lineHeight: 18, weight: '400',marginTop:16,marginRight:8
        }

    },
    mainHeaderContent:{
        main:{
            justifyContent:'center',alignItems: 'center'
        },
        image:{
            width:100,
            height:100,
            padding:18.65,
            borderRadius:50,
            borderColor: '#EE6093',
            border:1
        }

    }
})