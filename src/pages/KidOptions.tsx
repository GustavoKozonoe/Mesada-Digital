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

export function KidOptions(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>OPÇÕES</Text>
            
            <View style = {styles.subcontainer}>
                <Button 
                    title = 'VER PERFIL'
                    onPress = {() => {navigation.navigate('KidProfile')}}
                />

                <Button 
                    title = 'VER LOJA' 
                    onPress = {() => {navigation.navigate('Shop')}}
                />

                <Button 
                    title = 'VER TAREFAS'
                    onPress = {() => {navigation.navigate("KidTasks")}}
                />

                <Button title = 'VER QUESTIONÁRIOS' />
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
        fontSize: 48
    },
    subcontainer:{
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})