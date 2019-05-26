import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { whileStatement } from '@babel/types';

const LIGHT_PURPLE = "rgb(193,173,234)";
const DARK_PURPLE = "rgb(154, 0, 154)";
const WHITE = "rgb(255,255,255)";

class RegisterScreen extends Component{
/* make a constructor and init state in the username and password so that parent can use it and
we can store it*/

    constructor(props){
        super(props);
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        };
        // this.updateText = this.updateText.bind(this);
    }
    //react can't handle setState for nested updates, so we create dummy object
    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials);
        console.log(field);
        /*NB: field is square bracketed because a value in quote is being passed into it */
        newCredentials[field] = text;

        this.setState({
            credentials: newCredentials
        });
    };
        /* send credentials to server, if sign up success */
    register() {

        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });
        alert(JSON.stringify(this.state.credentials));
        /*navigate to switchNavigator, and then access the main key that gets mapped to MainFeed  */
        this.props.navigation.navigate("main");
        /* else error message */
    }
    /*need to remmeber to put paratheses after the function if you want to call it.
    But without if you just want to reference it */

/*TODO: Native component for "BVLinearGradient" does not exist. */
//backgroundImage: linearGradient(DARK_PURPLE, LIGHT_PURPLE),

    render(){
        return (
                <View
                    style ={{
                        flex: 1,
                        height: 100 +"%",
                        width: 100+ "%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:  LIGHT_PURPLE,
                    }}
                >
                    <Text>Insta React</Text>
                    <Text>REGISTER PAGE</Text>
                    <TextInput
                        value={this.state.email}
                        placeholder = "USERNAME"
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => this.updateText(text, "email")}
                    />
                    <TextInput
                        value = {this.state.password}
                        placeholder = "PASSWORD"
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => this.updateText(text, "password")}
                        secureTextEntry
                    />
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
        width: 100 +"%",
        paddingHorizontal: 10,
        backgroundColor: WHITE,
        marginBottom: 10,
    },
    linearGradient:{
        flex: 1,
    }
});

export default RegisterScreen;