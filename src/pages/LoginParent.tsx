import React from 'react';
import 
{
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native'

import Studies from '../assets/Studies.png'

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function LoginParent(){
    const navigation = useNavigation();

    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style = {styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
                >   
                    <Image 
                        source = {Studies}
                        style = {styles.image}
                    />

                    <View>
                        <Input title = 'Email' password = {false} />
                        <View style = {styles.password}>
                            <Input title = 'Senha' password = {true} />
                            <TouchableOpacity>
                                <Text style = {styles.text}>Esqueceu sua senha ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {styles.button}>
                        <Button 
                            title = 'LOGIN'
                            onPress = {() => {navigation.navigate('ParentOptions')}}
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    image:{
        marginTop: '5%',
        flex: 0.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    password:{
        marginTop: '5%',
        alignItems: 'center'
    },
    text: {
        color: colors.gray,
        fontFamily: fonts.text
    },
    button:{
        marginBottom: '5%'
    }
})