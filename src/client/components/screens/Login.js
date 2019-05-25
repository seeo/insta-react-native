import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Login extends Component{
    login() {
        alert('Login Button works!');
    }

    render(){
        return (
            <TouchableOpacity
                style ={{
                    flex: 1,
                    height: 100 +"%",
                    width: 100+ "%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress = {()=>{
                    this.login()
                }}
            >
                <Text>LOGIN PAGE</Text>
            </TouchableOpacity>
        );
    }
}

export default Login;