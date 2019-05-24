import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class InstaClone extends Component{
    render(){
        return(
            <View style = {{flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <View style = {styles.tempNav}
                >
                    <Text> InstaReact </Text>
                </View>
                <Image
                    style = {{width: 100 + "%", height: 100}}
                    source = {{
                            uri: "https://lh3.googleusercontent.com/FAr81UhFiTHfZokqKPnDOy1NSKa1bZNETqCPg9QEnF_1vkXSPTCRSXZUIUYaCfAQ_Z8ois6SD9eArsxAllSiOSiteQ"
                               }
                        //"https: //www.petmd.com/sites/default/files/petmd-puppy-weight.jpg"
                              }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomColor: "rgb(242,242,242)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InstaClone;