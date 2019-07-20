import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

//StatusBar backgroundColor only available in android
class ProjectSubmitScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNav: false,
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={'#339999'} />
                <ProjectPageHeader />
                <View style={styles.maincontent}>
                    <ProjectDetails />
                </View>
                <ProjectPageBottom onSubmit=
                    {() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Details' })
                            ],
                        }))
                    }} />
            </View>
        )
    }
}

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
        };
    }
    render() {
        return (
            <View style={styles.projectdetailbox}>
                <View style={{ width: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='ios-add-circle' size={40} color='#339966' />
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <View style={{ width: '95%', height: '90%', backgroundColor: '#F1F8F8', borderRadius: 10, elevation: 1 }}>

                    </View>
                </View>
            </View>
        )
    }
}

class ProjectPageHeader extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.headerleftcomponent} >
                        <Image
                            source={require('../image/head1.png')}
                            style={{ width: '100%', height: '100%', borderRadius: 50 }}
                        />
                    </View>
                </View>
                <View style={styles.headercentercomponent}>
                    <Text style={{ color: '#FFF', fontSize: 32, fontWeight: 'bold' }}>付志超</Text>
                </View>
                <View style={styles.headerrightcomponent}>
                    <Icon name='md-menu' size={40} color='white' onPress={() => { alert('Modal') }} />
                </View>
            </View>
        )
    }
}

class ProjectPageBottom extends React.Component {
    render() {
        const { onSubmit, } = this.props;
        return (
            <View style={styles.bottom} >
                <View style={{flex:1}}>

                </View>
                <View style={{ flex: 1, width:60, alignItems: 'center', justifyContent: 'center' }}>
                    <Button type='clear' containerStyle={{width:100, backgroundColor:'#339999'}} title='提交' titleStyle={{color:'white'}} onPress={onSubmit} />
                </View>                
            </View>
        )
    }

}

ProjectPageBottom.propTypes = {
    onSubmit: PropTypes.func,
};
ProjectPageBottom.defaultProps = {
    onSubmit: () => alert('Please attach a method to this component'),
}


const styles = StyleSheet.create({
    maincontent: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bottom: {
        justifyContent: 'space-around',
        height: 70,
        borderTopWidth: 4,
        borderTopColor: '#339999',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    header: {
        height: 80,
        backgroundColor: '#339999',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headercentercomponent:
    {
        flex: 2,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    headerleftcomponent:
    {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50
    },
    headerrightcomponent:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    projectdetailbox:
    {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row'
    }
});

export default ProjectSubmitScreen;