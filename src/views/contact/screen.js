import React, { Component } from 'react'
import {
    Alert,
    LayoutAnimation,
    TouchableOpacity,
    Dimensions,
    Image,
    UIManager,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Picker
} from 'react-native'
import { Font } from 'expo'
import { Input, Button } from 'react-native-elements'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            selectedType: null,
            fontLoaded: false,
            username: '',
            email: '',
            password: '',
            confirmationPassword: '',
            emailValid: true,
            passwordValid: true,
            usernameValid: true,
            confirmationPasswordValid: true,
        }

        this.setSelectedType = this.setSelectedType.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateConfirmationPassword = this.validateConfirmationPassword.bind(
            this,
        )
        this.signup = this.signup.bind(this)
    }

    async componentDidMount() {
        await Font.loadAsync({
            light: require('../../../assets/fonts/Ubuntu-Light.ttf'),
            bold: require('../../../assets/fonts/Ubuntu-Bold.ttf'),
            lightitalic: require('../../../assets/fonts/Ubuntu-Light-Italic.ttf'),
        })

        this.setState({ fontLoaded: true })
    }

    signup() {
        LayoutAnimation.easeInEaseOut()
        const usernameValid = this.validateUsername()
        const emailValid = this.validateEmail()
        const passwordValid = this.validatePassword()
        const confirmationPasswordValid = this.validateConfirmationPassword()
        if (
            emailValid &&
            passwordValid &&
            confirmationPasswordValid &&
            usernameValid
        ) {
            this.setState({ isLoading: true })
            setTimeout(() => {
                LayoutAnimation.easeInEaseOut()
                this.setState({ isLoading: false })
                Alert.alert('🎸', 'You rock')
            }, 1500)
        }
    }

    validateUsername() {
        const { username } = this.state
        const usernameValid = username.length > 0
        LayoutAnimation.easeInEaseOut()
        this.setState({ usernameValid })
        usernameValid || this.usernameInput.shake()
        return usernameValid
    }

    validateEmail() {
        const { email } = this.state
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailValid = re.test(email)
        LayoutAnimation.easeInEaseOut()
        this.setState({ emailValid })
        emailValid || this.emailInput.shake()
        return emailValid
    }

    validatePassword() {
        const { password } = this.state
        const passwordValid = password.length >= 8
        LayoutAnimation.easeInEaseOut()
        this.setState({ passwordValid })
        passwordValid || this.passwordInput.shake()
        return passwordValid
    }

    validateConfirmationPassword() {
        const { password, confirmationPassword } = this.state
        const confirmationPasswordValid = password === confirmationPassword
        LayoutAnimation.easeInEaseOut()
        this.setState({ confirmationPasswordValid })
        confirmationPasswordValid || this.confirmationPasswordInput.shake()
        return confirmationPasswordValid
    }

    setSelectedType = selectedType =>
        LayoutAnimation.easeInEaseOut() || this.setState({ selectedType })

    render() {
        const {
            isLoading,
            selectedType,
            fontLoaded,
            confirmationPassword,
            email,
            emailValid,
            password,
            passwordValid,
            confirmationPasswordValid,
            username,
            usernameValid,
            name,
            phone,
            message
        } = this.state

        return !fontLoaded
            ? <Text> Loading... </Text>
            : <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.container}
            >
                <KeyboardAvoidingView
                    behavior="position"
                    contentContainerStyle={styles.formContainer}
                >

            
                    <Text style={styles.signUpText}>CONTACT</Text>
                    <Text style={styles.whoAreYouText}></Text>
                   
                
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <FormInput
                            refInput={input => (this.usernameInput = input)}
                            icon="user"
                            value={username}
                            onChangeText={username => this.setState({ username })}
                            placeholder="Prénom"
                            onChangeText={(text) => this.setState({text})}
                            returnKeyType="next"
                            errorMessage={usernameValid ? null : 'Ce champ ne peut être vide'}
                            onSubmitEditing={() => {
                                this.validateUsername()
                                this.emailInput.focus()
                            }}
                        />
                        <FormInput
                            refInput={input => (this.nameInput = input)}
                            icon="user"
                            value={name}
                            onChangeText={name => this.setState({ name })}
                            placeholder="Nom"
                            returnKeyType="next"
                            errorMessage={usernameValid ? null : 'Ce champ ne peut être vide'}
                            onSubmitEditing={() => {
                                this.validateUsername()
                                this.emailInput.focus()
                            }}
                        />
                        <FormInput
                            refInput={input => (this.emailInput = input)}
                            icon="envelope"
                            value={email}
                            keyboardType={phone ? 'phone-pad' : 'default'}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Email"
                            
                            returnKeyType="next"
                            errorMessage={emailValid ? null : 'Merci de saisir une adresse mail valide'}
                            onSubmitEditing={() => {
                                this.validateEmail()
                                this.passwordInput.focus()
                            }}
                        />
                         <FormInput
                            refInput={input => (this.phoneInput = input)}
                            icon="screen-smartphone"
                            value={phone}
                            onChangeText={phone => this.setState({ phone })}
                            placeholder="Téléphone"
                            returnKeyType="next"
                            errorMessage={usernameValid ? null : 'Ce champ ne peut être vide'}
                            onSubmitEditing={() => {
                                this.validateUsername()
                                this.emailInput.focus()
                            }}
                        />
                           <FormInput
                            refInput={input => (this.messageInput = input)}
                            multiline={true}
                            numberOfLines={23}
                            value={message}
                            onChangeText={message => this.setState({ message })}
                            placeholder="Message"
                            returnKeyType="next"
                            errorMessage={usernameValid ? null : 'Ce champ ne peut être vide'}
                            onSubmitEditing={() => {
                                this.validateUsername()
                                this.emailInput.focus()
                            }}
                        />
                        {/* <Picker
                            selectedValue={this.state.language}
                            style={{ borderColor: "black", borderWidth: 1, height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */}
                    </View>
                    <Button
                        loading={isLoading}
                        title="Envoyer"
                        containerStyle={{ flex: -1 }}
                        buttonStyle={styles.signUpButton}
                        titleStyle={styles.signUpButtonText}
                        onPress={this.signup}
                        disabled={isLoading}
                    />
                </KeyboardAvoidingView>
                <View style={styles.loginHereContainer}>
                    <Text style={styles.alreadyAccountText}>
                        Already have an account.
                    </Text>
                    <Button
                        title="Login here"
                        titleStyle={styles.loginHereText}
                        containerStyle={{ flex: -1 }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        underlayColor="transparent"
                        onPress={() => Alert.alert('🔥', 'You can login here')}
                    />
                </View>
            </ScrollView>
            
    }
}

export const UserTypeItem = props => {
    const { image, label, labelColor, selected, ...attributes } = props
    return (
        <TouchableOpacity {...attributes}>
            <View
                style={[
                    styles.userTypeItemContainer,
                    selected && styles.userTypeItemContainerSelected,
                ]}
            >
                <Text style={[styles.userTypeLabel, { color: labelColor }]}>
                    {label}
                </Text>
                <Image
                    source={image}
                    style={[
                        styles.userTypeMugshot,
                        selected && styles.userTypeMugshotSelected,
                    ]}
                />
            </View>
        </TouchableOpacity>
    )
}

export const FormInput = props => {
    const { icon, refInput, ...otherProps } = props
    return (
        <Input
            {...otherProps}
            ref={refInput}
            inputContainerStyle={styles.inputContainer}
            leftIcon={<Icon name={icon} color="#7384B4" size={18} />}
            inputStyle={styles.inputStyle}
            autoFocus={false}
            autoCapitalize="none"
            keyboardAppearance="dark"
            errorStyle={styles.errorInputStyle}
            autoCorrect={false}
            blurOnSubmit={false}
            placeholderTextColor="#7384B4"
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    signUpText: {
        color: '#39a937',
        fontSize: 28,
        fontWeight: "bold",
    },
    whoAreYouText: {
        color: '#7384B4',
        fontFamily: 'bold',
        fontSize: 14,
    },
    userTypesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SCREEN_WIDTH,
        alignItems: 'center',
    },
    userTypeItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    userTypeItemContainerSelected: {
        opacity: 1,
    },
    userTypeMugshot: {
        margin: 4,
        height: 70,
        width: 70,
    },
    userTypeMugshotSelected: {
        height: 100,
        width: 100,
    },
    userTypeLabel: {
        color: 'yellow',
        fontFamily: 'bold',
        fontSize: 11,
    },
    inputContainer: {
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'rgba(110, 120, 170, 1)',
        height: 45,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: 'black',
        fontFamily: 'light',
        fontSize: 16,
    },
    errorInputStyle: {
        marginTop: 0,
        textAlign: 'center',
        color: '#F44336',
    },
    signUpButtonText: {
        fontFamily: 'bold',
        fontSize: 13,
    },
    signUpButton: {
        
        width: 250,
        borderRadius: 50,
        height: 45,
    },

    loginHereText: {
        color: '#08a0c9',
        fontFamily: 'lightitalic',
        fontSize: 12,
    },
})
