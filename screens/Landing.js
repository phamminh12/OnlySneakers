import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,

} from 'react-native';

function LandingScreen({ navigation }){
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Slide'); 
        }, 5000);
    
        // Hủy bỏ timer
        // return () => clearTimeout(timer);
      }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/images/bg1.jpg')}
                style={{
                    flex: 1,
                    resizeMode: 'contain',
                }}
            >
                <Text
                    style={{
                        fontSize: 80,
                        color: 'white',
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        textAlign: 'center',
                        paddingTop: '68%',

                    }}    
                >O n l y</Text>
            </ImageBackground>
        </View>
    );
}

export default LandingScreen;