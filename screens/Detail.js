import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Headerback from '../components/Headerback';

const sizes = [6, 6.5, 7, 8, 9];

function DetailScreen({ navigation }) {

    const [size, setSize] = useState('');

    const detail = `Air Jordan 5 Retro SE ‘Midnight Navy’ làm nổi bật tông màu hoàn thiện ở mặt trên bằng vải và da lộn, được trang bị cổ đệm và lưới thoáng khí. Khoen đúc màu đen phù hợp với logo Jumpman trang trí ở lưỡi giày và gót chân sau. Giày thể thao này nằm trên đế giữa bằng polyurethane màu trắng với các chi tiết răng cá mập lốm đốm và bộ phận đế Air có thể nhìn thấy ở gót chân. Đế ngoài bằng cao su mờ màu xanh lam có mô hình lực kéo xương cá để có độ bám tối ưu giúp hoàn thiện vẻ ngoài.
    Thương hiệu: Jordan
    Thiết kế: Air Jordan 5
    Ngày sản xuất: 11 – 11 – 2023
    Mã sản phẩm: FD6812-400
    Xuất xứ: Mỹ`;

    return (
        <>
            <ScrollView style={{
                flex: 1,
                paddingHorizontal: 12,
                backgroundColor: 'rgba(204, 219, 230, 1)',
            }}>
                <Headerback navigation={navigation} />

                <Image
                    source={require('../assets/images/nike1.png')}
                    style={styler.imgShow}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <View style={styler.containerImg}>
                        <Image
                            source={require('../assets/images/nike1.png')}
                            style={styler.imgDetail}
                        />
                    </View>
                    <View style={styler.containerImg}>
                        <Image
                            source={require('../assets/images/nike11.jpg')}
                            style={styler.imgDetail}
                        />
                    </View>
                    <View style={styler.containerImg}>
                        <Image
                            source={require('../assets/images/nike12.jpg')}
                            style={styler.imgDetail}
                        />
                    </View>
                    <View style={styler.containerImg}>
                        <Image
                            source={require('../assets/images/nike13.jpg')}
                            style={styler.imgDetail}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 24,
                    marginLeft: 12,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                            Air Jordan 1 Zoom CMTF 2
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            color: 'rgba(82, 142, 190, 1)',
                            fontWeight: 'bold',
                        }}>
                            <Ionicons
                                name='logo-bitcoin'
                                size={18}
                            />
                            18820
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 12,
                        justifyContent: 'space-between',
                    }}>
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
                            <Text style={styler.textInfo}>
                                Rating
                            </Text>
                        </View>
                        <Text style={[styler.textInfo, {
                            alignSelf: 'flex-end',
                            fontSize: 12,
                        }]}>
                            Free Shipping
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 12,
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-start',
                        }}>
                            Select Size
                        </Text>
                        <Text style={[styler.textInfo, {
                            alignSelf: 'flex-end',
                            fontSize: 12,
                        }]}>
                            Size Guide
                        </Text>
                    </View>
                    <FlatList
                        horizontal
                        data={sizes}
                        // keyExtractor = {item => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => { setSize(item); }}
                                style={styler.size(size, item)}>
                                <Text style={styler.textSize(size, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{
                    marginTop: 12,
                    marginLeft: 12,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Details</Text>
                    <Text>
                        {detail}
                    </Text>
                </View>
                <View style={{
                    marginTop: 24,
                }}>
                    <FlatList
                        horizontal
                        data={[1, 2]}
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
                                    <Ionicons
                                        name="heart-outline"
                                        size={25}
                                    />
                                </View>
                                <Text style={[{
                                    alignSelf: 'flex-start',
                                }, styler.textRcm]}>
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
                                    <Text style={styler.textRcm}>
                                        Rating
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={{
                    height: 80,
                }}></View>

            </ScrollView>
            <View style={{
                position: 'absolute', bottom: 0,
                paddingHorizontal: 42,
                zIndex: 3,
            }}>
                <TouchableOpacity style={{
                    width: 360,
                    height: 60,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.86)',
                    borderRadius: 24,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: "#fff",
                        fontSize: 16,
                    }}>
                        Add To Cart
                    </Text>
                </TouchableOpacity>
                <View style={{
                    height: 12,
                }}></View>
            </View>
        </>
    );
}


export default DetailScreen;

const styler = StyleSheet.create({
    imgShow: {
        height: 480,
        width: 360,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    containerImg: {
        width: 100,
        height: 100,
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
    },
    imgDetail: {
        height: 96,
        width: 100,
        resizeMode: 'contain',
    },
    textInfo: {
        color: '#777',
    },
    size: (size, item) => ({
        width: 60,
        height: 60,
        marginTop: 12,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: size === item ? "rgba(51, 137, 207, 1)" : "rgba(0,0,0,0)",
    }),
    textSize: (size, item) => ({
        fontSize: 16,
        color: size === item ? "#fff" : "#111",
    }),
    textRcm: {
        color: "#666",
        fontSize: 13,
    },
})