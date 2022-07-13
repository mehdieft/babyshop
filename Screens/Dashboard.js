import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';





export default function Dashboard() {
    return (
        <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 12, marginBottom: 4, color: '#25396F' }}>Good Morning</Text>
                    <Text style={{ fontSize: 24, color: '#25396F' }}>Annete</Text>
                </View>
                <Image source={require('../assets/icons/anne.png')} style={{ borderRadius: 40, width: 60, height: 60 }} />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center',marginBottom:24 }}>
                <View style={{ borderRadius: 5, marginRight: 8, }} elevation={5}>

                    <LinearGradient style={{ width: 230, height: 230, }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F3A183', '#EC6F66', '#EC6F66']} >
                        <Image style={{ width: 67, height: 82, marginLeft: 67, marginTop: 75 }} source={require('../assets/icons/janin.png')} />
                        <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>192</Text>
                        <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>Days to go!</Text>
                    </LinearGradient>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <Text style={{ padding: 8 }}>Due date 27 Jan 2022</Text>
                    </View>
                </View>
                <View style={{ borderRadius: 5 }} elevation={5}>

                    <LinearGradient style={{ width: 230, height: 230, }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F3A183', '#EC6F66', '#EC6F66']} >
                        <Image style={{ width: 67, height: 82, marginLeft: 67, marginTop: 75 }} source={require('../assets/icons/orange.png')} />
                        <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>192</Text>
                        <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>Days to go!</Text>
                    </LinearGradient>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <Text style={{ padding: 8 }}>Due date 27 Jan 2022</Text>
                    </View>
                </View>
            </View>

            {/* card is here */}
            <View style={{marginHorizontal: 16}}>
                <View style={{width:328,height:32,backgroundColor:'#3EB09B'}}>
                    <ImageBackground source={require('../assets/icons/Vector.png')} resizeMode="cover" >

                    <Text style={{marginVertical:6,color:'#FFFFFF',marginLeft:16}}>Your baby at Week 10</Text>
                    </ImageBackground>
                </View>

            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        borderRadius: 5, marginRight: 8,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }
})