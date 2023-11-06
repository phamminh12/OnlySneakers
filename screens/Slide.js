import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './Login';
import slides from '../data/slides';

const style=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    // titleStyle: {
	// 	padding: 10,
	// 	textAlign: 'center',
	// 	fontSize: 18,
	// 	fontWeight: 'bold',
	// },
	// paragraphStyle: {
	// 	padding: 20,
	// 	textAlign: 'center',
	// 	fontSize: 16,
	// },
	introImageStyle: {
		width: 450,
		height: 480,
		marginBottom: 20
	},
	introTextStyle: {
		fontSize: 24,
		color: "#999",
		textAlign: 'left',
	},
	introTitleStyle: {
		color: "#333",
		fontSize: 36,
		marginBottom: 12
	},
	buttonCircle: {
		width: 120,
		height: 40,
		backgroundColor: 'rgba(40, 101, 168, 0.8)',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}, 
    buttonText: {
        fontSize: 16,
        color: "#fff",
    },
});

function SlideScreen ({ navigation }){
    const [ showRealApp, setShowRealApp ] = useState(false);

    const _renderItem = ({ item }) => {
        return (
            <View style={StyleSheet.container}>
                <Image
                    source = {item.image}
                    style={style.introImageStyle}
                />
                <View style={{
                    width : 320,
                    marginLeft: 20,
                }}>
                    <Text style={style.introTitleStyle}>
                        {item.title}
                    </Text>
                </View>
                <View style={{
                    width: 400,
                    marginLeft: 20,
                }}>
                    <Text style={style.introTextStyle}>
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    };

    const _renderNextButton = () => {
        return (
            <View style={style.buttonCircle}>
                <Text style={style.buttonText}>
                    Next
                </Text>
            </View>
        );
    };

    const _renderDoneButton = () => {
        return (
            <View style={style.buttonCircle}>
                <Text style={style.buttonText}>
                    Done
                </Text>
            </View>
        );
    };

    const _onDone = () => {
        setShowRealApp(true);
    };

    return (
        <>
        {showRealApp ? (
            <LoginScreen navigation={navigation}/>
            // navigation.navigate('Login')
        ) : (
            <AppIntroSlider
                data = {slides}
                renderItem = {_renderItem}
                renderNextButton = {_renderNextButton}
                renderDoneButton = {_renderDoneButton}
                onDone = {_onDone}
                showSkipButton = {false}
                onSkip = {_onDone}
                dotStyle = {{backgroundColor: '#bbb', height: 6, width: 12}}
                activeDotStyle = {{backgroundColor: "rgba(240, 129, 53, 0.8)", height: 6, width: 24 }}
            />
        )}
        </>
    );
}

export default SlideScreen;