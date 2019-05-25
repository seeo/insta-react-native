import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Post from "../presentation/Post";

class PostFeed extends Component{
//create function called renderPost that will return Post
    _renderPost({item}){
        return <Post item = {item}/>
    }

    _returnKey(item){
        return item.toString();
    }
    /*FlatList renders data that you provide to it, sort of like the array.map() method that we usually see for reactJS
    At the same time, we also need to assign a key value to the items in the data because react will be using
    its virtual DOM to determine which unique items in the data list have changed and require rendering...
    keyExtractor helps us with this by specifying which piece of data should be used as the key*/
    render(){
        return(
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
            keyExtractor={this._returnKey}
            renderItem={this._renderPost}
        />
        )
    }
}

export default PostFeed;