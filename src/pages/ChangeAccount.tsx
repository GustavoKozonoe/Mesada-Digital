import React from "react";
import { useState } from "react";
import 
{
    SafeAreaView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function ChangeAccount()
{
    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
                >
                    <Input title = 'Nome' password = {false} />

                    <Input title = 'Email' password = {false} />

                    <Input title = 'Senha' password = {true} />

                    <Input title = 'Confirmar Senha' password = {true} />

                    <Button title="Alterar conta" />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    text:{
        fontSize: 34,
        fontFamily: fonts.ButtonText
    },
    input:{
        borderWidth: 1,
        width: 290,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.white
    },
})
