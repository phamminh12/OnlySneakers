import React, { useState } from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Modal,
    Button,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import Modal from 'react-native-modal';

import Headerback from '../components/Headerback';

export default function CheckoutScreen({ navigation }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(204, 219, 230, 1)',
        }}>


            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    toggleModal();
                }}
                style={{
                    flex: 1, 
                }}
            >
                <SafeAreaView style={{
                    flex: 1,justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                }}>
                    <View style={{
                        padding: 24,
                        backgroundColor: "#fff", borderRadius: 12,
                    }}>
                        <Image
                            source = {require('../assets/images/success.png')}
                            style={{
                                alignSelf: 'center',
                                resizeMode: 'contain',
                                height: 120, width: 160,
                            }}
                        />
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold',
                        }}>Your Payment is Successful</Text>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            marginTop: 8,
                        }}>
                            <TouchableOpacity
                                onPress={() => toggleModal()}
                            >
                                <Text style={{
                                    color: 'red'
                                }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Tabs")}
                            >
                                <Text style={{
                                    color: 'blue',
                                }}>Continue Shopping</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>


            <Headerback navigation={navigation} title={'CheckOut'} />
            <View style={{
                // flex: 0.42,
                marginTop: 100, paddingHorizontal: 16, paddingTop: 20, paddingBottom: 32,
                backgroundColor: '#fff', borderRadius: 24,
            }}>
                <Text style={{
                    fontSize: 18, fontWeight: '600',
                }}>
                    Delivery Address
                </Text>
                <TextInput
                    placeholder='Address'
                    placeholderTextColor='#444'
                    onChangeText={newtext => { }}
                    name='address'
                    style={styler.textInput}
                />
                <TextInput
                    placeholder='City'
                    placeholderTextColor='#444'
                    onChangeText={newtext => { }}
                    name='city'
                    style={styler.textInput}
                />
                <TextInput
                    placeholder='Pincode'
                    placeholderTextColor='#444'
                    onChangeText={newtext => { }}
                    name='pincode'
                    style={styler.textInput}
                />
                <TextInput
                    placeholder='Number'
                    placeholderTextColor='#444'
                    onChangeText={newtext => { }}
                    name='number'
                    style={styler.textInput}
                />
            </View>
            <ScrollView style={{
                // flex: 0.12,
                paddingHorizontal: 12,
                backgroundColor: 'rgba(204, 219, 230, 1)',
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <Image
                        source={require('../assets/images/nike6.png')}
                        style={{
                            flex: 1,
                            width: 120,
                            height: 80,
                            marginRight: 12,
                        }}
                    />
                    <View style={{
                        flex: 2.5,
                        alignSelf: 'center',
                    }}>
                        <Text style={{
                            fontSize: 16,
                        }}>
                            Air Jordan 1 Zoom CMFT 2
                        </Text>
                        <Text style={{
                            marginTop: 6,
                            fontSize: 18, fontWeight: 'bold',
                        }}>
                            <Ionicons
                                name='logo-bitcoin'
                                size={16}
                            />
                            18820
                        </Text>
                    </View>
                    <View style={{
                        flex: 0.5,
                        alignSelf: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 18, fontWeight: 'bold',
                        }}>
                            6.5
                        </Text>
                        <TouchableOpacity style={{
                            marginTop: 6,
                        }}>
                            <Ionicons
                                name='trash-outline'
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                paddingHorizontal: 12, paddingTop: 12,
                // flex: 0.3,
                width: '100%', height: 160,
                backgroundColor: '#ccc',
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    height: 36,
                }}>
                    <Text style={styler.textBill}>
                        Sub Total
                    </Text>
                    <Text style={styler.textBill}>
                        <Ionicons
                            name="logo-bitcoin" size={16}
                        />
                        18820
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    height: 36,
                }}>
                    <Text style={styler.textBill}>
                        Taxes
                    </Text>
                    <Text style={styler.textBill}>
                        <Ionicons
                            name="logo-bitcoin" size={16}
                        />
                        180
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    height: 36,
                }}>
                    <Text style={styler.textBill}>
                    </Text>
                    <Text style={styler.textBill}>
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    height: 36,
                }}>
                    <Text style={styler.textBill}>
                        Total
                    </Text>
                    <Text style={styler.textBill}>
                        <Ionicons
                            name="logo-bitcoin" size={16}
                        />
                        19000
                    </Text>
                </View>
            </View>
            <View style={{
                // flex: 0.16,
                width: '100%', height: 120,
                paddingHorizontal: 48, paddingTop: 36,
                backgroundColor: 'rgba(204, 219, 230, 1)'
            }}>
                <TouchableOpacity style={{
                    height: 48,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'rgba(38, 126, 255, 0.8)',
                    borderRadius: 24,
                }}
                    onPress={() => toggleModal()}
                >
                    <Text style={{
                        fontSize: 18, color: '#fff',
                    }}>
                        Payment
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styler = StyleSheet.create({
    textBill: {
        fontSize: 16, color: "#333",
    },
    textInput: {
        marginTop: 12,
        paddingHorizontal: 16, paddingVertical: 6,
        fontSize: 16, color: '#333',
        borderColor: "#111", borderWidth: 0.8, borderRadius: 8,
    }
})