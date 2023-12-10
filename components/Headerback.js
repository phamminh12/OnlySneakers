import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Headerback ({navigation, title}) {
    return(
        <View style={{
            position: 'absolute', top: 0,
            width: '94%',
            flexDirection: 'row', justifyContent: 'space-between',
            marginTop: 24,
            marginHorizontal: 12,
            zIndex: 3,
        }}>
            <TouchableOpacity style={styler.button}>
                <Ionicons
                    name = "chevron-back-outline"
                    color = "rgba(39, 153, 245, 1)"
                    size={36}
                />
            </TouchableOpacity>
            <Text style={{
                fontSize: 24,
            }}>{title}</Text>
            <TouchableOpacity>
                <Ionicons
                    name = "cart-outline"
                    color = "#333"
                    size={36}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Headerback;


const styler = StyleSheet.create({
    button: {
        paddingRight: 1,
        backgroundColor: '#fff', borderRadius: 18,
    }
})