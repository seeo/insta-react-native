import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-ionicons';
import CameraScreen from './screens/CameraScreen';
import LoginScreen from './screens/LoginScreen';
import MainFeedScreen from './screens/MainFeedScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

/* define stack and switch navigators by including each screen in its configuration with an accompanying key.
 because when we use navigation.navigate(), we will refer to these keys and not the name of the component.
 Also, StackNavigator has been deprecated, use createStackNavigator instead. Same applies for
 other kinds of navigators*/

 /* got a little stuck here because apparently createTabNavigator has been deprecated in v3.0 */
const Tabs = createBottomTabNavigator({
    home: {
        screen: MainFeedScreen,
        navigationOptions: {
            tabBarIcon: ({tintcolor})=>(
                <Icon name = "home" size={25}/>
            ),
             tabBarOptions: {
                 showLabel: false,
             }
        }
    },
    camera: {
        screen: CameraScreen,
        navigationOptions: {
            tabBarIcon: ({tintcolor})=>(
                <Icon name = "camera" size={30}/>
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
    profile: {
        screen: ProfileScreen,
         navigationOptions: {
            tabBarIcon: ({tintcolor})=>(
                <Icon name = "person" size={25}/>
            ),
            tabBarOptions: {
                showLabel: false,
            }
        }
    },
});

/* create a container for the TabsNavigator since requirement for react-navigation v3.0 */
const TabsContainer = createAppContainer(Tabs);

const IntroStack = createStackNavigator({
    register: RegisterScreen,
    login: LoginScreen,
})

const IntroStackContainer = createAppContainer(IntroStack);

/* The MainStack switch navigator will be in charge of linking the stack navigator
and bottomTabNavigator together*/
 const MainStack = createSwitchNavigator({
    /*in this case, giving a key of 'login' and will map to Login screen then we want to implement going
    from login to the mainfeed */
    intro: IntroStack,
    main: Tabs,
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