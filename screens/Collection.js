import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import Header from '../components/Header';

function Collection({ navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 12,
            backgroundColor: 'rgba(238, 238, 227, 1)',
        }}>
            <Header navigation={navigation} />
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontSize: 32,
                }}>Only</Text>
                <Image
                    source={require('../assets/images/logorb.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 52,
                        width: 60,
                    }}
                />
            </View>
            <Text style={{ fontSize: 32 }}>Collection</Text>
            <View style={{
                marginTop: 24,
                width: '100%',
                height: 268,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 20,
            }}>
                <Image
                    source={require('../assets/images/nikerb.png')}
                    style={{
                        resizeMode: 'contain',
                        height: 180,
                        transform: [{ rotate: '-24deg' }]
                    }}
                />
                <View style={styler.linePoster}>
                    <View>
                        <Text style={{
                            color: '#222',
                            fontSize: 18,
                        }}>
                            Air Jordan 1 Zoom
                        </Text>
                        <Text style={{
                            color: '#666',
                        }}>
                            Men's Shoes
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Ionicons
                            name="heart-outline"
                            size={32}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styler.linePoster}>
                    <Text style={styler.textPoster}>
                        2 Colours
                    </Text>
                    <Text style={styler.textPoster}>
                        Free Shipping
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
                marginLeft: 12,
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                }}>
                    Special Deal
                </Text>
                <TouchableOpacity
                    onPress={() => { alert('Coming soon') }}
                >
                    <Text style={{
                        marginRight: 12,
                        fontSize: 15,
                        color: 'rgba(89, 143, 221, 1)',
                    }}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 24,
            }}>
                <FlatList
                    horizontal
                    data={[1, 2, 3]}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{
                            width: 240,
                            height: 260,
                            marginLeft: 12,
                            paddingHorizontal: 12,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderRadius: 20,
                        }}>
                            <Image
                                source={require('../assets/images/nike2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 200,
                                    height: 180,
                                }}
                            />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                }}>
                                    Air Jordan Low PF
                                </Text>
                                <TouchableOpacity
                                    onPress = {()=>navigation.navigate('Favorite')}
                                >
                                    <Ionicons
                                        name="heart-outline"
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={[{
                                alignSelf: 'flex-start',
                            }, styler.textPoster]}>
                                Men's Shoes
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'flex-start',
                            }}>
                                <Text style={{
                                    color: 'rgba(89, 143, 221, 1)',
                                    marginRight: 6,
                                }}>
                                    4.8
                                </Text>
                                <Text style={styler.textPoster}>
                                    Rating
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

export default Collection;

const styler = StyleSheet.create({
    linePoster: {
        width: '100%',
        paddingHorizontal: 12,
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textPoster: {
        color: "#666",
        fontSize: 13,
    }
})