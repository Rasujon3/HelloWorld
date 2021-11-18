import React, {useState} from 'react';
import { Button, Text, TextInput, View,StyleSheet, TouchableOpacity, Touchable } from 'react-native';

const Login = (props) => {
    const [authState, setAuthState] = useState({
        mode: "login",
        input: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })
    return (
        <View style={styles.loginView}>
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
            <TextInput 
                style={styles.input}
                placeholder="Confirm Password"
                value={authState.input.confirmPassword}

            />
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnStyle}>{authState.mode==="login" ? "Login" : "Sign Up"}</Text>
            </TouchableOpacity>
        </View>
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