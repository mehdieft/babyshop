import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RadiusButton from '../components/RadiusButton';

export default function KickCounter() {
    return (
        <View style={styles.container}>
            <View style={styles.headerIconInner.main}>
                <Text style={styles.headerIconInner.text}>Record Kicks</Text>
                <MaterialCommunityIcons name="plus-circle" size={48} color="#EE6093" />
            </View>
            <View style={styles.mainHeaderContent.main}>
                <Text style={styles.mainHeaderContent.text1}>kicks</Text>
                <Text style={styles.mainHeaderContent.text2}>07</Text>
                <Image source={require('../assets/icons/babyCounter.png')} style={styles.mainHeaderContent.image} />
                <Text style={styles.mainHeaderContent.text1}>01:05</Text>
                <Text style={styles.mainHeaderContent.text3}>Duration</Text>
                <RadiusButton text="stop" onpress={() => alert('stop')} bgColor='#EE6093' />

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
            fontSize: 14, lineHeight: 18, weight: '400', marginTop: 16, marginRight: 8
        }

    },
    mainHeaderContent: {
        main: {
            justifyContent: 'center', alignItems: 'center'
        },
        image: {
            width: 100,
            height: 100,
            padding: 18.65,
            borderRadius: 50,
            borderColor: '#EE6093',
            border: 1, marginBottom: 24
        }, text1: { fontSize: 14, lineHeight: 22, color: '#464646', weight: '400', marginBottom: 8 },
        text2: { fontSize: 36, lineHeight: 36, color: '#212121', weight: '400', marginBottom: 24 },
        text3: { fontSize: 10, lineHeight: 15, color: '#282828', weight: '400', marginBottom: 32 }

    }
})