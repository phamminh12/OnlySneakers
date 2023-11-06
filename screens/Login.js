import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={[styles.textTitle, styles.textTitleBold]}>Welcome Back</Text>
                <Text style={[styles.textTitle, styles.textTitleLower]}>Enter Your Detail Your Shoes is waiting for you</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder='Username Or Number'
                    placeholderTextColor="#555"
                    onChangeText={newText => { }}
                    name="user"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#555'
                    onChangeText={newText => { }}
                    name="password"
                    secureTextEntry
                    style={styles.textInput}
                />
                <TouchableOpacity>
                    <Text style={styles.textForgot}>Forgot Your Password?</Text>
                </TouchableOpacity>
                <View style={{
                    marginTop: 32,
                }}>
                    <Pressable
                        onPress={() => { }}
                        style={[styles.btnContainer,{backgroundColor: 'rgba(214, 215, 216, 1)',}]}
                    >
                        <Text style={styles.textLogin}>Log In</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => alert('Coming Soon')}
                        style={[styles.btnContainer,{backgroundColor: 'rgba(199, 210, 217, 1)',}]}
                    >
                        <Ionicons name="logo-google" size={20} color="rgba(0, 107, 180, 1)" />
                        <Text style={styles.textLogin}>Log In With Google</Text>
                    </Pressable>
                </View>
                <View style={{
                    marginTop: 60,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Don't Have Account?
                    </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <Text style={{
                            fontSize: 16,
                            color: "rgba(0, 107, 180, 1)",
                            fontWeight: 'bold',
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "rgba(220, 225, 230, 1)",
    },
    title: {
        marginBottom: 100,
    },
    textTitle: {
        textAlign: 'center',
    },
    textTitleBold: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textTitleLower: {
        fontSize: 16,
    },
    form: {
        paddingVertical: 50,
        paddingHorizontal: 45,
        height: 544,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 20,
        height: 50,
        width: 360,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 12,
        color: '#111',
    },
    textForgot: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#888',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
        paddingVertical: 12,
        marginBottom: 20,
        height: 50,
        width: 360,
        borderRadius: 20,
    },
    textLogin:{
        fontSize: 16,
    },
});

export default LoginScreen;