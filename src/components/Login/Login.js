import React, {useState,useEffect} from 'react';
import { Button, Text, TextInput, View,StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import backgroundImage from '../../images/sujon.jpg';
import {tryAuth} from '../../redux/actionCreators';
import { useIsFocused } from '@react-navigation/native';

const mapStateToProps = state => {
    return {
        isAuth : state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tryAuth: (email,password,mode) => dispatch(tryAuth(email,password,mode))
    }
}

const Login = (props) => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const isFocused = useIsFocused();

    useEffect(() => {
      setAuthStates({
          ...authStates,
          inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
      })
    }, [isFocused])

    const switchViews=()=>{
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : 'login',
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    }

    const updateInputs = (value,name) => {
        setAuthStates({
            ...authStates,
            inputs : {
                ...authStates.inputs,
                [name]: value
            }
        })
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const handleAuth = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email !== "" & password !== "") {
            if (re.test(email)) {
                if (authStates.mode === 'login') {
                    props.tryAuth(email,password, "login");
                } else {
                    if (password === confirmPassword) {
                        props.tryAuth(email,password, "signup");
                         
                    } else {
                        alert("Password fields doesn't Match!");
                    }
                }
            } else {
                alert("Invalid Email!");
            }
        } else {
            alert("Input all the fields!");
        }
    }

    let confirmPassField = null;
    if (authStates.mode === "signup") {
        confirmPassField = (
            <TextInput 
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
                onChangeText={value => updateInputs(value, "confirmPassword")}
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
                <Text style={styles.btnStyle}>{authStates.mode==="login" ? "Swich to Sign Up" : "Swich to Login"}</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    placeholder="Your Email Address"
                    value={authStates.inputs.email}
                    onChangeText={value => updateInputs(value, "email")}

                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    value={authStates.inputs.password}
                    onChangeText={value => updateInputs(value, "password")}


                />

                {confirmPassField}

                <TouchableOpacity style={styles.btnContainer}
                onPress={()=> {
                    handleAuth();
                }}
                >
                    <Text style={styles.btnStyle}>{authStates.mode==="login" ? "Login" : "Sign Up"}</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login);