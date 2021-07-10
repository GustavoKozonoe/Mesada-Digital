import { useNavigation } from '@react-navigation/native';
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

export function ParentOptions(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>OPÇÕES</Text>
            
            <View style = {styles.subcontainer}>
                <Button 
                    title='EDITAR CONTA'
                    onPress = {() => {navigation.navigate('ChangeAccount')}}
                />

                <Button 
                    title='GERENCIAR SUBCONTA'
                    onPress = {() => {navigation.navigate('ManageSubAccount')}}
                />

                <Button 
                    title='GERENCIAR TAREFAS' 
                    onPress = {() => {navigation.navigate('ManageTasks')}}
                />

                <Button 
                    title='GERENCIAR RECOMPENSAS' 
                    onPress = {() => {navigation.navigate('ManageRewards')}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center'
    },
    text:{
        fontFamily: fonts.ButtonText,
        fontSize: 48
    },
    subcontainer:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})