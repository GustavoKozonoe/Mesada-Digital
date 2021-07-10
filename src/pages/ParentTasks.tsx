import React from 'react';
import 
{
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';

import fonts from '../styles/fonts';

import { Tasks } from '../components/ParentTasks';

export function ParentTasks()
{
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>Tarefas</Text>
            <View style = {styles.subContainer}>
                <Tasks title = 'Nome da Tarefa' value = {100} /> 
                <Tasks title = 'Nome da Tarefa' value = {100} /> 
                <Tasks title = 'Nome da Tarefa' value = {100} /> 
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        alignItems: 'center'
    },
    subContainer:
    {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text:
    {
        fontFamily: fonts.ButtonText,
        fontSize: 36,
        marginBottom: '5%'
    },
})