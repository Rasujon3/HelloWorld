import React, {useState} from 'react';
import { Button, Text, TextInput, View,StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../../images/sujon.jpg';

const Login = (props) => {
    const [authState, setAuthState] = useState({
        mode: "login",
        input: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const switchViews=()=>{
        setAuthState({
            ...authState,
            mode: authState.mode === "login" ? "signup" : 'login'
        })
    }
    let confirmPassField = null;
    if (authState.mode === "signup") {
        confirmPassField = (
            <TextInput 
                style={styles.input}
                placeholder="Confirm Password"
                value={authState.input.confirmPassword}
            />
        );
    }

    return (
        <ImageBackground 
            source={backgroundImage} 
            style={{width: "100%", flex: 1}}
            blurRadius={2}
            >
            <View style={styles.loginView}>
                <TouchableOpacity 
                    style={{...styles.btnContainer , backgroundColor: "#1167b1", width: "85%"}}
                    onPress={
                        () => switchViews()
                    }
                >
                <Text style={styles.btnStyle}>{authState.mode==="login" ? "Swich to Sign Up" : "Swich to Login"}</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    placeholder="Your Email Address"
                    value={authState.input.email}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    value={authState.input.password}

                />

                {confirmPassField}

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnStyle}>{authState.mode==="login" ? "Login" : "Sign Up"}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "85%",
        padding: 5,
        marginTop: 10,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#009688",
        borderRadius: 4
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 5,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login;