import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../views/profile';

const ProfileDrawerItem = StackNavigator({
    Playground: { screen: Profile }
  },
  {
    headerMode: 'none'
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: 'FAQ',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="question-answer"
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

export default ProfileDrawerItem;
