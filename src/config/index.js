export default {
    images: {
        //we require the icons here so that at compile time, these stuff will already be included in the bundle:
        heartIcon: require('../../assets/icons/heart-50.png'),
        chatIcon: require('../../assets/icons/chat-50.png'),
        forwardIcon: require('../../assets/icons/forward-48.png'),
        homeIcon: require('../../assets/icons/home-50.png'),
        addNewIcon: require('../../assets/icons/add-new-50.png'),
    },

    styleConstants:{
        rowHeight: 40,
        LIGHT_PURPLE: "rgb(193,173,234)",
        DARK_PURPLE: "rgb(154, 0, 154)",
        WHITE: "rgb(255,255,255)",
    },
    /* make a variable called "baseUrl" that can handle all our requests at the backend.
    for now it will just be pointing to the turbo360 vertex url that we have successfuly
    deployed on the internet */
    baseUrl: 'https://instaclone-ldysta.turbo360-vertex.com/api/',
    // baseUrl: 'http://localhost:3000/api/'
};


