import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import Chips from '../components/Chips';
import CardComponent from '../components/CardComponent';
import ImageComponent from '../components/ImageComponent'
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/primaryButton'





export default function Dashboard({navigation}) {
    return (
        <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
            <ScrollView style={styles.scrollView}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 }}>
                    <View>
                        <Text style={{ fontSize: 12, marginBottom: 4, color: '#25396F' }}>Good Morning</Text>
                        <Text style={{ fontSize: 24, color: '#25396F' }}>Annete</Text>
                    </View>
                    <Image source={require('../assets/icons/anne.png')} style={{ borderRadius: 40, width: 60, height: 60 }} />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
                    <View style={{ borderRadius: 5, marginRight: 8, }} elevation={5}>

                        <LinearGradient style={{ width: 160, height: 160, }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F3A183', '#EC6F66', '#EC6F66']} >
                            <Image style={{ width: 67, height: 82, marginLeft: 37, marginTop: 35 }} source={require('../assets/icons/janin.png')} />
                            <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>192</Text>
                            <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>Days to go!</Text>
                        </LinearGradient>
                        <View style={{ backgroundColor: '#FFFFFF' }}>
                            <Text style={{ padding: 8 }}>Due date 27 Jan 2022</Text>
                        </View>
                    </View>
                    <View style={{ borderRadius: 5 }} elevation={5}>

                        <LinearGradient style={{ width: 160, height: 160, }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F3A183', '#EC6F66', '#EC6F66']} >
                            <Image style={{ width: 67, height: 82, marginLeft: 37, marginTop: 35 }} source={require('../assets/icons/orange.png')} />
                            <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>192</Text>
                            <Text style={{ paddingVertical: 0, paddingHorizontal: 0, color: 'white', marginLeft: 8 }}>Days to go!</Text>
                        </LinearGradient>
                        <View style={{ backgroundColor: '#FFFFFF' }}>
                            <Text style={{ padding: 8 }}>Due date 27 Jan 2022</Text>
                        </View>
                    </View>
                </View>

                {/* card is here */}
                <View style={{ marginHorizontal: 8, backgroundColor: ' #FFFFFF', width: '100%' }} elevation={5}>
                    <View style={{ width: '100%', height: 32, backgroundColor: '#3EB09B', }}>
                        <ImageBackground source={require('../assets/icons/Vector.png')} resizeMode="cover" >

                            <Text style={{ marginVertical: 6, color: '#FFFFFF', marginLeft: 16, }}>Your baby at Week 10</Text>
                        </ImageBackground>
                    </View>

                    <View style={{ backgroundColor: '#FFFFFF' }}   >
                        <Text style={{ fontSize: 16, padding: 4, marginLeft: 16 }}>Trimester 1</Text>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                <ImageBackground source={require('../assets/icons/Group23.png')} style={{ marginLeft: 16, width: '50%', height: 50 }} resizeMode="cover">
                                </ImageBackground>
                                <ImageBackground source={require('../assets/icons/Group24.png')} style={{ width: '50%', height: 50 }} resizeMode="cover">
                                </ImageBackground>
                            </View>
                            <Text style={{ margin: 16, lineHeight: 21, fontSize: 18 }}>This week your baby has finished the most critical part of development! Organs and structures are in place and ready to grow.</Text>
                        </View>
                    </View>
                </View>

                {/* another card component */}
                <View style={{ marginTop: 24, backgroundColor: '#FFFFFF', marginLeft: 8, width: '100%' }} elevation={5}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                        <Text style={{ color: '#25396F' }}>how Are you?</Text>
                        <EvilIcons name="pencil" size={24} color="black" />
                    </View>
                    <Text style={{ color: '#00866A', padding: 16 }}>Symptom</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                        <Chips title="Morning sickness/nausea" onpress={() => console.log('hello')} />
                        <View style={{ width: 8 }}></View>
                        <Chips title="Dizziness" onpress={() => console.log('hello')} style={{ marginRight: 8 }} />
                    </View>
                    <Text style={{ color: '#00866A', padding: 16 }}>Medications</Text>

                    <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                        <Chips title="Dizziness" onpress={() => console.log('hello')} />
                    </View>

                    <Text style={{ color: '#00866A', padding: 16 }}>Medications</Text>

                    <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                        <Chips title="Dizziness" onpress={() => console.log('hello')} />
                        <View style={{ width: 8 }}></View>

                        <Chips title="Dizziness" onpress={() => console.log('hello')} />

                    </View>
                    <CardComponent h1="Cycle Length" t1="24 Days" h2="Sleep" t2="8.20 Hrs" />
                    <CardComponent h1="temprature" t1="94.31 F" h2="Weight" t2="71.54 Kg" />

                </View>
                <Text style={{ marginTop: 32 }}>Tools</Text>
                <View style={{ marginVertical: 8 }}>
                    <ImageComponent bgColor="#EE6093" header="Kick Counter" content="Kick counter helps you to counts the baby movements">
                        <Image style={{ width: 38, height: 30, marginVertical: 29, marginHorizontal: 29 }} source={require('../assets/icons/doggy.png')} resizeMode="cover" />
                    </ImageComponent>
                    <ImageComponent bgColor="#1AB0B0" header="Contraction Timer" content="Contraction Timer helps you to counts the baby during contraction">
                        <Image style={{ width: 20, height: 30, marginVertical: 29, marginHorizontal: 39 }} source={require('../assets/icons/voltage.png')} resizeMode="cover" />
                    </ImageComponent>

                </View>
                <Text style={{ marginTop: 32 }}>Articles & Videos</Text>
                <View style={{ width: '100%', marginTop: 5, alignItems: 'center' }}>
                    <Image source={require('../assets/pillow.png')} resizeMode="cover" style={{ borderRadius: 5, width: '100%' }} />
                </View>
                <View elevation={5} style={{ backgroundColor: '#FFFFFF' }} >
                    <Text style={{ padding: 16, weight: '500', fontSize: 16, lineHeight: 24, color: '#282828' }}>
                        Take a prenatal vitamin
                    </Text>
                    <Text style={{ marginHorizontal: 16, weight: '400', fontSize: 14, lineHeight: 21, color: '#646464' }}>
                        Folic acid helps your baby's brain and spinal cord develop correctly.
                        This nutrient reduces the risk of
                        serious birth defects called spina bifida and anencephaly.
                    </Text>
                    <Text style={{ marginHorizontal: 16, marginVertical: 8, color: '#00866A' }}>Learn More</Text>
                </View>
                <View style={{ width: '100%', height: 152, marginTop: 16, alignItems: 'center' }}>
                    <Image source={require('../assets/runner.png')} resizeMode="cover" style={{ borderRadius: 5, width: '100%' }} />
                </View>
                <View elevation={5} style={{ backgroundColor: '#FFFFFF',marginBottom:16 }}>
                    <Text style={{ padding: 16, weight: '500', fontSize: 16, lineHeight: 24, color: '#282828' }}>
                        Exercise regularly</Text>
                    <Text style={{ marginHorizontal: 16, weight: '400', fontSize: 14, lineHeight: 21, color: '#646464' }}>
                        Maintaining a regular exercise routine throughout
                        your pregnancy can help you stay healthy and feel your best.</Text>
                    <Text style={{ marginHorizontal: 16, marginVertical: 8, color: '#00866A' }}>Learn More</Text>

                </View>
                <View style={{ backgroundColor: '#FFFFFF', }}>
                    <ImageBackground source={require('../assets/girl.png')} resizeMode="cover" style={{ justifyContent: 'center', alignItems: 'center',height:150 }}>
                        <Ionicons name="md-play-circle-outline" size={48} color="white" />
                    </ImageBackground>
                </View>
                <View elevation={5} style={{ backgroundColor: '#FFFFFF',marginBottom:32 }}>
                    <Text style={{ padding: 16, weight: '500', fontSize: 16, lineHeight: 24, color: '#282828' }}>
                    Coronavirus infection and pregnancy</Text>
                    <Text style={{ marginHorizontal: 16, weight: '400', fontSize: 14, lineHeight: 21, color: '#646464' }}>
                    Maintaining a regular exercise routine throughout your pregnancy can help you stay
                     healthy and feel your best.</Text>
                    <Text style={{ marginHorizontal: 16, marginVertical: 8, color: '#00866A' }}>Watch Now</Text>
                </View>
                <PrimaryButton  onPress={() => navigation.navigate('Kick counter')} text='See More' bgColor="#00866A" />


            </ScrollView>
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