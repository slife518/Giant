import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Button,
} from 'react-native';
import FooterButton from './components/FooterButton'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                   <Text>MainScreen</Text>
                   <FooterButton buttonText='뒤로가기' onPress={()=>this.props.navigation.navigate('Home')}/>
                   
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#D8D8D8',
    }
})