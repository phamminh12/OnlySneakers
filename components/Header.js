import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header ({navigation}) {
    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
        }}>
            <TouchableOpacity
                onPress = {()=> {}}
            >
                <Ionicons
                    name="menu-outline"
                    size={32}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {() => navigation.navigate('Cart')}
            >
                <Ionicons
                    name="cart-outline"
                    size={32}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;