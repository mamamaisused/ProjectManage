import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import ProjectSubmitScreen from './include/projectsubmit' ;

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back home"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'ProjectSubmit' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  ProjectSubmit: {
    screen: ProjectSubmitScreen,
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'ProjectSubmit',
});

export default createAppContainer(AppNavigator);