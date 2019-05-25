import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';

const LIGHT_PURPLE = "rgb(193,173,234)";
const DARK_PURPLE = "rgb(154, 0, 154)";


class RegisterScreen extends Component{
    register() {
        /* send credentials to server, if sign up success */
        /*navigate to switchNavigator, and then access the main key that gets mapped to MainFeed  */
        this.props.navigation.navigate("main");
        /* else error message */
    }
    /*need to remmeber to put paratheses after the function if you want to call it.
    But without if you just want to reference it */

    render(){
        return (
            <View
                style ={{
                    flex: 1,
                    height: 100 +"%",
                    width: 100+ "%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: linearGradient(DARK_PURPLE, LIGHT_PURPLE),
                }}
            >
                <Text>INSTA REACT</Text>
                <Text>(Register PAGE)</Text>
                <TextInput style = {styles.input} />
                <TextInput />
                <Button onPress ={() => {
                    this.register()
                }}
                    title = "Signup" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 +"%"
    }
});

export default RegisterScreen;