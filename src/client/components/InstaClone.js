import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

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
        "https://lh3.googleusercontent.com/FAr81UhFiTHfZokqKPnDOy1NSKa1bZNETqCPg9QEnF_1vkXSPTCRSXZUIUYaCfAQ_Z8ois6SD9eArsxAllSiOSiteQ" +
        "=s"+
        imageHeight;
        //alert(imageHeight);

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
                    style = {{width: this.state.screenWidth, height: 400}}
                    source = {{uri: imageUri}}
                />
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
        height: 50,
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
})

export default InstaClone;