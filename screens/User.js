import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView, 
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    StyleSheet,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Headerback0 from '../components/Headerback0';
export default function UserScreen ({navigation}) {
    return (
        <View style={{
            marginTop: 6,
          
        }}>
            <Headerback0 navigation={navigation} title='Only'/>
            <View style={{
                height:100,
            }}>
            </View>
            <View style={{
                height:180,
                alignItems:'center',
            }}>
                <Image style={{
                    width:'20%',
                    height:90,
                    resizeMode:'contain',
                    borderRadius:70,
                    marginBottom:10,
                    borderWidth:1,
                    borderColor:'blue'

                }} source={require('../assets/images/avatar.jpg')}/>
                <Text style={{
                    fontSize:28,
                    fontWeight:'bold',
                    height:50,
                }}>
                Keyur Dasani
                </Text>
            </View>

            <View style={{
                paddingHorizontal:25,
            }}>
                <Text style={styles.title }>
                    Full Name
                </Text>
                <TextInput
                 placeholder='Keyur Dasani57'
                 placeholderTextColor="#555"
                 onChangeText={newText => { }}
                 name="user" 
                 style={styles.input}
                />
                <Text style={styles.title }>
                    Email
                </Text>
                <TextInput
                 placeholder='Keyurdasani@gmail.com'
                 placeholderTextColor="#555"
                 onChangeText={newText => { }}
                 name="user" 
                 style={styles.input}
                />
                <Text style={styles.title }>
                    Password
                </Text>
                <TextInput
                 placeholder='Keyur@57'
                 placeholderTextColor="#555"
                 onChangeText={newText => { }}
                 name="user" 
                 style={styles.input}
                />

                <TouchableOpacity 
                    onPress = {()=>navigation.navigate('Login')}
                >
                    <Text style={[
                        styles.title,{
                            fontWeight:'bold',
                            marginTop:25,
                            fontSize:24,
                        }
                    ]}>
                        Sign Out
                    </Text>
                </TouchableOpacity>

            </View>
         
        

        </View>
        
    );
    }
    const styles =StyleSheet.create({
        title:{
        fontSize:22,
         marginBottom:15,
         marginLeft:10,
         marginTop:10,
        },
        input:{
            width:'96%',
            paddingVertical:10,
            borderWidth:1,
            borderColor:'#D9D9D9',
            borderRadius:20,
            paddingHorizontal:12,
            backgroundColor:'#bbb',
        }
    })