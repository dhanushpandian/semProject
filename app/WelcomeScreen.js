import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../app/assets/th.jpg")}>
            <Image style={styles.logo} source={require("../app/assets/icon.png")}></Image>
   
            <Button style={{justifyContent:"flex-end", flex:1}} title='login'></Button>
      
            <View  style={styles.login}>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
            flex:1
    },
    login:{
        backgroundColor:"red",
        width:"50%",
        color:"red",
        top:90,
        justifyContent:"flex-end",
    },
    register:{
        flex:2
    },
    logo:{
        alignSelf:"center",
        width:100,
        height:100,
        position:"absolute",
        top:70
    }
})

export default WelcomeScreen;