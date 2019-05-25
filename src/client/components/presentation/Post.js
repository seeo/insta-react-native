import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../../config/index';

class Post extends Component{

    constructor(props){
        super(props);
            this.state = {
                liked: false,
                screenWidth: Dimensions.get("window").width,
            }
        }

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        //did a Math.floor because want to remove long decimals which are messing up our query to the Turbo360 API
        console.log(this.props.item);
        const imageHeight = Math.floor(this.state.screenWidth*1.1);
        const imageSelection = this.props.item % 2 === 0 ? "https://lh3.googleusercontent.com/_0FRN6XutpXy-lLMAqdlXJELsSHMKUOGn-1rG0ZUas2Ut32QjaR0dFbUGKugWvjOlZMfKuBcHHDGX2Dlwztfym3v" :
        "https://lh3.googleusercontent.com/FAr81UhFiTHfZokqKPnDOy1NSKa1bZNETqCPg9QEnF_1vkXSPTCRSXZUIUYaCfAQ_Z8ois6SD9eArsxAllSiOSiteQ"
        const imageUri = imageSelection + "=s"+ imageHeight + "-c";

        const heartIconColor = this.state.liked ? 'rgb(252,61,57)' : null;

        return(
            <View style = {{ flex: 1, width: 100 + "%"}}>
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress = {() => {
                        this.likeToggled();
                    }}
                    >
                    <Image
                        style = {{width: this.state.screenWidth, height: 325}}
                        source = {{uri: imageUri}}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                        {/*use an array inside the style so that each icon can also have their own styles*/}
                    <Image
                        style = {[
                            styles.icon,
                            {height: 40, width: 40, tintColor: heartIconColor}
                        ]}
                        source = {config.images.heartIcon}
                    />
                    <Image
                        style = {[styles.icon, {height: 32, width: 32}]}
                        source = {config.images.chatIcon}
                    />
                    <Image
                        style = {[styles.icon, {height: 35, width: 35}]}
                        source = {config.images.forwardIcon}
                    />
                </View>
                <View style = {styles.iconBar}>
                     <Image
                        style = {[
                            styles.icon,
                            {height: 20, width: 20}
                        ]}
                        source = {config.images.heartIcon}
                    />
                    <Text>128 likes</Text>
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
        backgroundColor: 'rgb(255,255,255)',
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
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
    },

    icon:{
        marginLeft: 5,
    },
})

export default Post;