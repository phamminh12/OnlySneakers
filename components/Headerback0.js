import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

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
            <TouchableOpacity style={styler.button}
                onPress = {()=>navigation.goBack()}
            >
                <Ionicons
                    name = "chevron-back-outline"
                    color = "rgba(39, 153, 245, 1)"
                    size={36}
                />
            </TouchableOpacity>
            <View style={{
                flexDirection:'row'
            }}>

            <Text style={{
                fontSize: 24,
            }}>{title}
             
            </Text>
            <Image
                    source={require('../assets/images/logorb.png')}
                    style={{
                        resizeMode: 'contain',
                        width: 60,
                        height:45,
                        
                    }}
                />
            </View>
           
            <TouchableOpacity>
                <Octicons
                    name = "pencil"
                    color = "#666"
                    size={25}
                    style={{
                        borderBottomWidth:1,
                    }}
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