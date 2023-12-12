import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 24,
            backgroundColor: 'rgba(190, 224, 255, 1)',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Tabs') }}
                >
                    <Ionicons
                        name="reorder-two-outline"
                        size={36}
                        color="#333"
                    />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: '#333', fontSize: 32,
                    }}>Only</Text>
                    <Image source={require('../assets/images/logorb.png')} style={{
                        resizeMode: 'contain',
                        height: 60, width: 60,
                    }} />
                </View>
                <View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                marginLeft: 16,
            }}>
                <Image source={require('../assets/images/avatar.jpg')} style={{
                    resizeMode: 'contain',
                    height: 100, width: 100,
                    borderRadius: 60,
                }} />
                <View style={{
                    marginLeft: 24,
                }}>
                    <Text style={{
                        fontSize: 16,
                    }}>Hey,</Text>
                    <Text style={{
                        fontSize: 24,
                    }}>Keyur Dasani</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 20,
                marginTop: 12,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styler.button}
                >
                    <Ionicons name='person-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styler.button}
                >
                    <Ionicons name='home-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styler.button}
                >
                    <Ionicons name='cart-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>My Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styler.button}
                >
                    <Ionicons name='heart-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={styler.button}
                >
                    <Ionicons name='airplane-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Coming Soon')}
                    style={styler.button}
                >
                    <Ionicons name='notifications-outline' size={28} color='#707B81' />
                    <Text style={styler.buttonText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginTop: 12,
                }}
                    onPress = {()=>navigation.navigate('Login')}
                >
                    <Text style={{
                        fontWeight: 'bold', fontSize: 22,
                    }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styler = StyleSheet.create({
    button: {
        flexDirection: 'row', alignItems: 'center',
        marginVertical: 12,
    },
    buttonText: {
        marginLeft: 12,
        fontSize: 18,
    },
})