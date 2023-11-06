import React, { useState } from 'react';
import {
    Text,
    View,
    Pressable,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import categories from '../data/categories';

function MainScreen ({navigation}) {

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return(
        <View style={{
            flex: 1,
            paddingHorizontal: 12,
            backgroundColor: 'rgba(230, 243, 253, 1)',
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
                        resizeMode: 'contain',
                        height: 60,
                        width: 60,
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 120,
                backgroundColor: 'rgba(216, 216, 216, 1)',
                borderRadius: 20,
            }}>
                <View style={{
                    marginTop: 12,
                    marginLeft: 12,
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>20% Discount</Text>
                    <Text style={{
                        fontSize: 18,
                    }}>On Your Purchase</Text>
                    <Pressable
                        onPress= {() => {navigation.navigate('Collection')}}
                        style={[{
                            marginTop: 12,
                            paddingHorizontal: 6,
                            height: 24,
                            width: 88,
                            backgroundColor: '#222',
                            borderRadius: 12,
                        }]}
                    >
                        {({pressed})=>(
                            <Text style={{
                                fontSize: 16,
                                color: '#fff',
                            }}>
                                {pressed ? 'Shopping..' : 'Shop Now'}
                            </Text>
                        )}
                    </Pressable>
                </View>
                <Image
                    source={require('../assets/images/nike8rb.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 200,
                    }}
                />
            </View>
            <View style={{
                marginTop: 12,
            }}>
                <FlatList
                    horizontal
                    data = {categories}
                    keyExtractor={item => item}
                    renderItem = {({ item }) => (
                        <TouchableOpacity
                            onPress = {() => {setCurrentCategory(item);}}
                            style = {styles.tab(currentCategory, item)}
                        >
                            <Text style={styles.textTab(currentCategory, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tab: (currentCategory, item) => ({
        marginRight: 12,
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 24,
        backgroundColor: currentCategory === item ? 'rgba(65, 165, 246, 1)' : 'rgba(176, 176, 176, 1)',
    }),
    textTab: (currentCategory, item) => ({
        fontSize: 16,
        color: currentCategory === item ? '#fff' : "#111",
        fontWeight: currentCategory === item ? 'bold' : 'light',
    }),
});

export default MainScreen;