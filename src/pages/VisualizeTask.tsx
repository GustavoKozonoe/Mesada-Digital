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


export function VisualizeTask()
{
    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style = {styles.container}>
                <KeyboardAvoidingView 
                        style={styles.container}
                        behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
                >
                    <Text style = {styles.title}>Visualizar Tarefa</Text>
                    <View style = {styles.box}>
                        <TouchableOpacity style = {styles.task}>
                            <TextInput style = {styles.TextButton}>Tarefa</TextInput>
                            
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.task}>
                            <TextInput style = {styles.TextButton}>Valor</TextInput>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.buttons}>
                        <TouchableOpacity style = {[styles.button, { backgroundColor: colors.red_light }]}>
                            <Text style = {styles.text}>Deletar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {[styles.button, { backgroundColor: colors.yellow}]}>
                            <Text style = {styles.text}>Atualizar</Text>
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
        fontSize: 24,
        fontFamily: fonts.ButtonText
    },
    buttons:
    {
        flexDirection: 'row',
        width: 333,
        justifyContent: 'space-between'
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