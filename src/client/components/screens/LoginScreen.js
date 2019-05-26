import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from "../../../config/index";
import Icon from 'react-native-ionicons';

class LoginScreen extends Component{
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
    login() {
        console.log(config.baseUrl + 'login');
        fetch(config.baseUrl + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        })
        //convert the response to a json
        .then((response)=>response.json())
        //and then log out the json string
        .then((jsonResponse)=>{
            console.log(JSON.stringify(jsonResponse));
            /* if the user is logged in then navigate to main page */``
            if(jsonResponse.confirmation==="success"){
                this.props.navigation.navigate('main')
            }else{
                //use the backend server's error message and throw it to front end
                throw new Error(jsonResponse.message);
                //throw new Error ("Sorry, something went wrong. Please try again");
            }
        })
        .catch((error) => {
            alert(JSON.stringify(error.message));
        });
        // alert(JSON.stringify(this.state.credentials));
         /*navigate to switchNavigator, and then access the main key that gets mapped to MainFeed  */
        // this.props.navigation.navigate("main");
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
                        backgroundColor: config.styleConstants.LIGHT_PURPLE,
                    }}
                >
                    <Text>Insta React</Text>
                    <Text>LOGIN PAGE</Text>
                    <TextInput
                        value={this.state.email}
                        placeholder = "Email Address"
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => this.updateText(text, "email")}
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        value = {this.state.password}
                        placeholder = "Enter password"
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => this.updateText(text, "password")}
                        secureTextEntry
                    />
                    <Button
                        onPress ={() => {this.login()}}
                        title = "Login"
                    />
                    <Button
                        onPress ={()=>{this.props.navigation.navigate('register')}}
                        title = "No Account? Sign up here"
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 +"%",
        paddingHorizontal: 10,
        backgroundColor: config.styleConstants.WHITE,
        marginBottom: 10,
    },
    linearGradient:{
        flex: 1,
    }
});

export default LoginScreen;