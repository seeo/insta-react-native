import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class InstaClone extends Component{
    render(){
        return(
            <View>
                <Text>A wonderful clone of Instagram!</Text>
                <Image
                style = {{width: 50, height: 50}}
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

export default InstaClone;