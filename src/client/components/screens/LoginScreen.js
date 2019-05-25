import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class LoginScreen extends Component{
    login() {
         /*navigate to switchNavigator, and then access the main key that gets mapped to MainFeed  */
        this.props.navigation.navigate("main");
    }
    /*need to remmeber to put paratheses after the function if you want to call it.
    But without if you just want to reference it */

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

export default LoginScreen;