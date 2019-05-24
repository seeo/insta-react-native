import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import config from '../../config/index.js';
import { start } from 'repl';

class InstaClone extends Component{

    constructor(props){
        super(props);
            this.state = {
                screenWidth: Dimensions.get("window").width,
            }
        }

    render(){
        //did a Math.floor because want to remove long decimals which are messing up our query to the Turbo360 API
        const imageHeight = Math.floor(this.state.screenWidth*1.1);
        const imageUri =
        "https://lh3.googleusercontent.com/FAr81UhFiTHfZokqKPnDOy1NSKa1bZNETqCPg9QEnF_1vkXSPTCRSXZUIUYaCfAQ_Z8ois6SD9eArsxAllSiOSiteQ"+
        "=s"+
        imageHeight+
        "-c";

        return(
            <View style = {{flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <View style = {styles.tempNav}>
                    <Text> InstaReact </Text>
                </View>
                <View style = {styles.userBar}>
                    <View style = {{flexDirection: 'row', alignItems: "center"}}>
                        <Image
                            style = {styles.userPic}
                            source = {{
                                uri: "https://lh3.googleusercontent.com/BzQF0oy3bpkjYFt5VwbprUgPifCl5lLFdD9nLk1vsWCLEfxuKO42OEgkiOow-TcsZ1CmoCPwz7xhbSoMg5yY7bxN"
                            }}
                        />
                        <Text style ={{marginLeft: 10}}>Siang Ee</Text>
                    </View>
                    <View style = {{alignItems: "center"}}>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>
                <Image
                    style = {{width: this.state.screenWidth, height: 325}}
                    source = {{uri: imageUri}}
                />
                <View style={styles.iconBar}>
                        {/*use an array inside the style so that each icon can also have their own styles*/}
                    <Image
                        style = {[styles.icon, {height: 40, width: 40}]}
                        source = {config.images.heartIcon}
                    />
                    <Image
                        style = {[styles.icon, {height: 30, width: 30}]}
                        source = {config.images.chatIcon}
                    />
                    <Image
                        style = {[styles.icon, {height: 40, width: 30}]}
                        source = {config.images.forwardIcon}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgb(237,237,237)',
        borderBottomColor: "rgb(83,83,83)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },

    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },

    iconBar:{
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(83,83,83)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
    },

    icon:{
        paddingHorizontal: 5,
    }
})

export default InstaClone;