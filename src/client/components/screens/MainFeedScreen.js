import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../../config/index';
import PostFeed from '../container/PostFeed';

class MainFeedScreen extends Component{
    render(){
        return(
            <View style = {{
                flex: 1,
                width: 100 + "%",
                height: 100 + "%"
                }}
            >
                <View style = {styles.tempNav}>
                    <Text> InstaReact </Text>
                </View>
                <PostFeed />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomColor: "rgb(83,83,83)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MainFeedScreen;