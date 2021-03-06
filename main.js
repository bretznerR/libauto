import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './src/drawer/home';
import Login from './src/drawer/login';
import Register from './src/drawer/Register';
import Profile from './src/drawer/profile';
import Contact from './src/drawer/contact';
import Settings from './src/drawer/settings';
import Components from './src/drawer/components';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
    <View style={{ flex: 1, backgroundColor: '#43484d' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('./src/images/logo.png')}
                style={{ width: SCREEN_WIDTH * 0.57 }}
                resizeMode="contain"
            />
        </View>
        <View style={{ marginLeft: 10 }}>
            <DrawerItems {...props} />
        </View>
    </View>
);


const MainRoot = DrawerNavigator(
    {
        Home: {
            path: '/ACCUEIL',
            screen: Home,
        },
        Contact: {
            path: '/CONTACT',
            screen: Contact,
        },
        FAQ: {
            path: '/FAQ',
            screen: Profile,
        },
        Register: {
            path: '/INSCRIPTION',
            screen: Register,
        },
        Login: {
            path: '/CONNEXION',
            screen: Login,
        },
        Favorites: {
            path: '/FAVORIS',
            screen: Settings,
        },
        Components: {
            path: '/Components',
            screen: Components,
        },
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#548ff7',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: '#ffffff',
            inactiveBackgroundColor: 'transparent',
            labelStyle: {
                fontSize: 15,
                marginLeft: 0,
            },
        },
        drawerWidth: SCREEN_WIDTH * 0.8,
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/images/bg_screen1.jpg'),
            require('./assets/images/bg_screen2.jpg'),
            require('./assets/images/bg_screen3.jpg'),
            require('./assets/images/bg_screen4.jpg'),
            require('./assets/images/user-cool.png'),
            require('./assets/images/user-hp.png'),
            require('./assets/images/user-student.png'),
            require('./assets/images/avatar1.jpg'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    render() {
        if(this.state.isLoading){
            return(
                <FadeInView style={{backgroundColor: 'white',width:screenWidth,flexDirection:'row', alignItems: 'center',justifyContent: 'center'}}>
                    <Image style={{width: 80, height: 80,}} source={require('./assets/icons/loading.gif')} />
                </FadeInView>
            );

        }

        return (
            <MainRoot />
        );
    }
}

Expo.registerRootComponent(AppContainer);
