import React from 'react';
import 
{
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function CreateReward()
{
    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style = {styles.container}>
                <KeyboardAvoidingView 
                        style={styles.container}
                        behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
                >
                    <Text style = {styles.title}>Criar Recompensa</Text>
                    <View style = {styles.box}>
                        <TextInput style = {styles.TextButton}>Recompensa</TextInput>

                        <TextInput style = {styles.TextButton}>Valor</TextInput>
                    </View>
                    <View style = {styles.buttons}>
                        <TouchableOpacity style = {[styles.button, { backgroundColor: colors.green }]}>
                            <Text style = {styles.text}>Criar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 76
    },
    title:
    {
        fontFamily: fonts.text,
        fontSize: 36,
    },
    box:
    {
        backgroundColor: colors.blue_dark,
        width: 340,
        height: 235,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    task:
    {
        width: 217,
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextButton:
    {
        width: 217,
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.white,
        fontSize: 24,
        fontFamily: fonts.ButtonText,
        textAlign: 'center'
    },
    buttons:
    {
        justifyContent: 'center'
    },
    button:
    {
        width: 122,
        height: 74,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text:
    {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 20
    }
})