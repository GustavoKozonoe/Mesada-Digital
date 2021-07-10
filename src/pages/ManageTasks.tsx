import React from 'react';
import 
{
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';

export function ManageTasks(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>GERENCIAR TAREFAS</Text>
            
            <View style = {styles.subcontainer}>
                <Button title='VER QUESTIONÁRIOS'/>

                <Button 
                    title='LISTA DE TAREFAS' 
                    onPress = {() => {navigation.navigate('ParentTasks')}}
                />

                <Button 
                    title='CRIAR TAREFA' 
                    onPress = {() => {navigation.navigate('CreateTask')}}
                />

                <Button 
                    title='ADICIONAR RECOMPENSA NA LOJA' 
                    onPress = {() => {navigation.navigate('CreateReward')}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background,
        alignItems: 'center'
    },
    text:{
        fontFamily: fonts.ButtonText,
        fontSize: 48,
        textAlign: 'center',
        marginTop: '5%'
    },
    subcontainer:{
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})