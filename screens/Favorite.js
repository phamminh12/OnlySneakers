import React from 'react';
import {
    View,
    Text,
    ScrollView, 
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Headerback from '../components/Headerback';

const Lists = [
    {
        id: 1,
        img: require('../assets/images/nike5.png'),
        title: 'Jordan 1 Zoom',
        price: '13 295.00',
    },
    {
        id: 2,
        img: require('../assets/images/nike7.png'),
        title: 'Jordan 1 Next Chapter',
        price: '18 395.00',
    },
    {
        id: 3,
        img: require('../assets/images/nike8.png'),
        title: 'Jordan 1 Retro High OG',
        price: '16 295.00',
    },
]

export default function FavoriteScreen ({navigation}) {
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: 'rgba(207, 220, 221, 1)', 
        }}>
            <Headerback navigation={navigation} title='Favorite'/>
            <View style={{height: 120,}}></View>
            <FlatList
                numColumns={2}
                data={ Lists }
                renderItem={({item})=>(
                    <TouchableOpacity
                        style={{
                            marginRight: 12, marginTop: 12, paddingHorizontal: 12, paddingBottom: 16,
                            width: 200, height: 240,
                            backgroundColor: '#bbb', borderRadius: 24,
                        }}
                    >
                        <Image
                            source={item.img}
                            style={{
                                resizeMode: 'contain',
                                width: '100%', height: '75%',
                            }}
                        />
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        }}>
                            <Text style={{
                                width: '75%',
                                fontSize: 16,
                            }}>{item.title}</Text>
                            <Ionicons name='heart-outline' size={32} color='#333'/>
                        </View>
                        <Text style={{
                            fontSize: 16, color: 'rgba(176, 113, 2, 1)',
                        }}>
                            <Ionicons name="logo-bitcoin" size={18} color='#222'/> {item.price}
                        </Text>
                    </TouchableOpacity>
                )}
                style={{
                    marginBottom: 75,
                }}
            />
            <View style={{
                marginTop: 12,
            }}>
                <TouchableOpacity style={{
                    zIndex: 2,
                    position: 'absolute', bottom: 0,
                    justifyContent: 'center', alignItems: 'center',
                    marginBottom: 20,
                    width: '100%', height: 60,
                    backgroundColor: 'rgba(4, 182, 220, 0.8)', borderRadius: 24,
                }}>
                    <Text style={{
                        color: '#fff', fontSize: 18,
                    }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}