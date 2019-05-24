export default {
    images: {
        //we require the icons here so that at compile time, these stuff will already be included in the bundle:
        heartIcon: require('../../assets/icons/heart-50.png'),
        chatIcon: require('../../assets/icons/chat-50.png'),
        forwardIcon : require('../../assets/icons/forward-24.png'),
    },

    styleConstants:{
        rowHeight: 50,
    }
};