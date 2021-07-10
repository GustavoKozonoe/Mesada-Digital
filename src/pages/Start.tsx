import React from 'react';
import 
{
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Alert,
    TouchableOpacity,
} from 'react-native';

import { Button } from '../components/Button';
import symbol from '../assets/symbol.png'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';

export function Start()
{
    const navigation = useNavigation();

    return(
        <SafeAreaView style = {styles.container}>

            <Image source = {symbol}/>

            <View style = {styles.subContainer}>
                <Text style = {styles.text}>Mesada Digital</Text>

                <Button 
                    title = "CADASTRAR"
                    onPress = {() => {navigation.navigate('CreateAccount')}}
                />

                <Button 
                    title = "LOGIN RESPONSÁVEL"
                    onPress = {() => {navigation.navigate('LoginParent')}}
                />

                <Button 
                    title = "LOGIN CRIANÇA"
                    onPress = {() => {navigation.navigate('LoginKid')}}
                />

            </View> 

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
        justifyContent: 'space-around',

    },
    subContainer:{
        flex: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.black,
    },
    text:{
        color: colors.black,
        fontSize: 48,
        fontFamily: fonts.text
    },
})