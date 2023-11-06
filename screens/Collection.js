import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import Header from '../components/Header';

function Collection ({navigation}) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 12,
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
            <Text style={{fontSize: 32}}>Collection</Text>
        </View>
    );
}

export default Collection;