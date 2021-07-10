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

export function ManageSubAccount(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>GERENCIAR SUBCONTA</Text>
            
            <View style = {styles.subcontainer}>
                <Button 
                    title='LISTAR SUBCONTAS' 
                    onPress = {() => {navigation.navigate('SubAccountsList')}}
                />

                <Button 
                    title='CRIAR SUBCONTA' 
                    onPress = {() => {navigation.navigate('CreateSubAccount')}}
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