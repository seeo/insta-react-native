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
                login: "",
                password: "",
            }
        }
    }

    register() {
        /* send credentials to server, if sign up success */
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
                    <TextInput style = {styles.input} placeholder = "USERNAME"/>
                    <TextInput style = {styles.input} placeholder = "PASSWORD" secureTextEntry/>
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