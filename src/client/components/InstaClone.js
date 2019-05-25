import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SwitchNavigator, TabNavigator} from 'react-navigation';
import MainFeed from './screens/MainFeed';
import Login from './screens/Login';



class InstaClone extends Component{
    render(){
        return(
                <Login />
        );
    }
}

export default InstaClone;