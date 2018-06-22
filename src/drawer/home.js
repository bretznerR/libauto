import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../views/home';

const HomeDrawerItem = StackNavigator({
        Playground: { screen: Home }
    },
    {
        headerMode: 'none'
    }
);

HomeDrawerItem.navigationOptions = {
    drawerLabel: 'HOME',
    drawerIcon: ({ tintColor }) => (
        <Icon
            name="person"
            size={30}
            iconStyle={{
                width: 30,
                height: 30
            }}
            type="material"
            color={tintColor}
        />
    ),
};

export default HomeDrawerItem;
