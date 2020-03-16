import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Platform,
} from 'react-native';

import FooterButton from './components/FooterButton';

// import firebase from 'react-native-firebase';

import Toast from 'react-native-easy-toast';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        // this.ref = firebase.firestore().collection('user')
        this.state = {
            name : '이름',
            email: '이메일',
            password: '비밀번호',
            repassword: '비밀번호확인',
            cellphone : '휴대폰번호',
            loading: false,
        }
    }

    handleSignUp = () => {
        // this.setState({ loading: true });
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then(() => {
        //     this.setState({ loading: false })
        //     this.ref.add({ id: this.state.email })
        //     this.props.navigation.navigate('Main')
        // })
        // .catch(() => {
        //     this.setState({ loading: false })
        //     this.refs.toast.show('이메일 형식을 확인해 주세요.\n비밀번호는 6자 이상이어야 합니다.', 1000)
        // });

        //http://10.0.2.2:80/dev.php/giantbaby/
        // fetch('http://slife705.cafe24.com/index.php/giantbaby/memberinfo/', {
        fetch('http://10.0.2.2:80/dev.php/giantbaby/memberinfo/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then((response)=>response.json())
        .then((responseJson)=>{
            alert(responseJson);
        }).catch((error)=>{
            // <Toast ref="toast"/>
            console.error(error);
        });
    }
        
    _onChangeText = (text) => {
        let formatedNo = this.formatMobileNumber(text);
        this.setState({ cellphone: formatedNo });

    };
    
    formatMobileNumber=(text=> {
        var cleaned = ("" + text).replace(/\D/g, "");
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            var intlCode = match[1] ? "+1 " : "",
            text = [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
                ""
            );
            return text;
        }
        return text;
    });
    
        
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.swicthText}>공동육아{"\n"}계정 만들기</Text>
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(name) => this.setState({name})}
                    placeholder={this.state.name}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={this.state.email}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={this.state.password}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(repassword) => this.setState({repassword})}
                    placeholder={this.state.repassword}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(cellphone) =>  this._onChangeText({cellphone})}
                    placeholder={this.state.cellphone}
                    autoCorrect={false}
                />
                <Text style={styles.descriptionText}>회원가입 시 이용약관에 동의한 것으로 간주합니다.</Text> 
                {
                    this.state.loading
                    ? <ActivityIndicator size="small" style={styles.signupButton} />
                    : <FooterButton
                        style={styles.signupButton}
                        buttonText="회원가입"
                        onPress={this.handleSignUp}
                        />
                }
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.alreadySignUpText}>이미 회원가입이 되어 있습니까? </Text> 
                </TouchableOpacity>
                {/* <Toast ref="toast" /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        // ...Platform.select({
        //     ios:{
        //         shadowColor:"",
        //         shadowOpacity : 0.5, 

                
        //     },
        //     android:{
        //         elevation : 3
        //     }
        // })
    },
    swicthText: {
        fontSize: 16,
        color: '#5B5A5A',
        marginTop: 41,
        textAlign: 'center',
        marginBottom: 115,
    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 12,
        color: '#5B5A5A',
        fontWeight: '200',
    },
    signupButton: {
        marginTop: 97.5,
    },
    alreadySignUpText : {
        marginTop: 20,
        fontSize : 12,
    }
});

