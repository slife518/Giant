import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FooterButton from './components/FooterButton'


export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            idText : '이메일',
            pwText : '비밀번호',
            welcomeText : '공동육아',
            noAccountText : '계정이 없으신가요?', 
            makeAccountText : '계정만들기',
            email : '',
            pw : ''
        }
    }

    handleSignUp = () => {
        
        let url = 'http://10.0.2.2:80/dev.php/giantbaby/Pc_login/signin';
        let formdata = new FormData();
        
        formdata.append("email",this.state.email);
        formdata.append("password",this.state.pw) ;
        
        
        fetch(url, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body:formdata
            })  
            .then(res => res.json())
            .then(res => {        
                    console.log('Data RESPONCE::', res);
            })
            .catch((error)=>{                   
                        console.error(error);
            });

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.welcomeText}</Text>
                <TextInput 
                    style={styles.textInputButton}
                    onChangeText= {(email) => this.setState({email})}
                    placeholder={this.state.idText}
                    autoCorrect={false}
                />
                 <TextInput 
                    style={styles.textInputButton}
                    onChangeText= {(pw) => this.setState({pw})}
                    placeholder={this.state.pwText}
                    autoCorrect={false}
                    secureTextEntry = {true}
                />

                <FooterButton 
                    style={styles.loginButton}
                    buttonText = '로그인'
                    // onPress={()=>this.props.navigation.navigate('Main')}
                    onPress={this.handleSignUp}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style= {styles.noAccountText}>{this.state.noAccountText}</Text>
                    <Text style= {styles.makeAccount}>{this.state.makeAccountText}</Text>
                </TouchableOpacity>
                
            </View>
            
        );
    }
}



const styles = StyleSheet.create({
    container:{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#D8D8D8',
    },
    title:{
        fontSize:20,
        textAlign : 'center',
        marginTop  : 10,
        marginBottom : 20,
    },
    textInputButton:{
        width : 288,
        borderColor : 'gray', 
        paddingVertical : 10, 
        borderWidth : 0.3, 
        paddingHorizontal : 5, 
        borderRadius : 2, 
        backgroundColor : 'white', 
        height : 50
    }, 
    loginButton:{
        width : 315, 
        height : 50,
        marginTop : 50,
    },
    noAccountText:{
        fontSize : 12, 
        textAlign : 'center',
        marginTop : 100, 
    },
    makeAccount:{
        fontSize : 12, 
        textAlign : 'center',
        marginTop : 10, 
        color: '#9013FE',

    }

  });
  