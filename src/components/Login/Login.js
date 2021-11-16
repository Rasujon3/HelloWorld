import React from 'react';
import { Button, Text, View } from 'react-native';

const Login = (props) => {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={
                ()=> {
                    props.navigation.navigate('Home')
                }
            }></Button>
        </View>
    );
};

export default Login;