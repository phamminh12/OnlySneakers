import React from 'react';
import {
    View,
    Text,
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
            <TouchableOpacity>
                <Ionicons
                    name="menu-outline"
                    size={32}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons
                    name="cart-outline"
                    size={32}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;