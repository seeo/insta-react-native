import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import CameraScreen from './screens/CameraScreen';
import LoginScreen from './screens/LoginScreen';
import MainFeedScreen from './screens/MainFeedScreen';
import ProfileScreen from './screens/ProfileScreen';

/* define stack and switch navigators by including each screen in its configuration with an accompanying key.
 because when we use navigation.navigate(), we will refer to these keys and not the name of the component.
 Also, StackNavigator has been deprecated, use createStackNavigator instead. Same applies for
 other kinds of navigators*/

 /* got a little stuck here because apparently createTabNavigator has been deprecated in v3.0 */
const Tabs = createBottomTabNavigator({
    feed: MainFeedScreen,
    camera: CameraScreen,
    profile: ProfileScreen,
});

/* create a container for the TabsNavigator since requirement for react-navigation v3.0 */
const TabsContainer = createAppContainer(Tabs);

 const MainStack = createSwitchNavigator({
    /*in this case, giving a key of 'login' and will map to Login screen then we want to implement going
    from login to the mainfeed */
    login: LoginScreen,
    main: MainFeedScreen,
});

/*In react-navigation v3.0, we actually have to create a container "wrapper" around the
createSwitchNavigator component*/
const MainStackContainer = createAppContainer(MainStack);

class InstaClone extends Component{
    render(){
        return(
            <MainStackContainer />
        );
    }
}

export default InstaClone;