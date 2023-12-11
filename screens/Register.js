import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Pressable,
} from 'react-native';

function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={[styles.textTitle, styles.textTitleBold]}>Create Account</Text>
                <Text style={[styles.textTitle, styles.textTitleLower]}>Let's Create Account Together</Text>
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
                    placeholder='Email'
                    placeholderTextColor="#555"
                    onChangeText={newText => { }}
                    name="email"
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
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor='#555'
                    onChangeText={newText => { }}
                    name="password2"
                    secureTextEntry
                    style={styles.textInput}
                />
                <View style={{
                    marginTop: 12,
                }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Tabs') }}
                        style={[styles.btnContainer,{backgroundColor: 'rgba(214, 215, 216, 1)',}]}
                    >
                        <Text style={styles.textLogin}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 12,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Already Have Account?
                    </Text>
                    <Text> </Text>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Login')}}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: "rgba(0, 107, 180, 1)",
                            fontWeight: 'bold',
                        }}>
                            Log In
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

export default RegisterScreen;