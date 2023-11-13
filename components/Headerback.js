import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Headerback ({navigation}) {
    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
        }}>
            <TouchableOpacity>
                <Ionicons
                    name = "arrow-back-circle-outline"
                    color = "rgba(39, 153, 245, 1)"
                    size={32}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons
                    name = "cart-outline"
                    color = "rgba(39, 153, 245, 1)"
                    size={32}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Headerback;