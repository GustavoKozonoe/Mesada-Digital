import React from 'react';
import 
{
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function KidRewards()
{
    function handleAccept(){
        Alert.alert("😮","Você já realizou essa tarefa ?",[
            {
                text: "Sim",
            },
            {
                text: "Ainda não"
            }
        ])
    }

    return(
        <TouchableOpacity 
            style = {styles.container}
            onPress = {handleAccept}
        >
            <Text style = {styles.text}>Nome da Tarefa</Text>
            <Text style = {styles.text}>Valor Dela</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:
    {
        width: 280,
        height: 62.5,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.blue_dark
    },
    text:
    {
        fontFamily: fonts.ButtonText,
        color: colors.white
    }
})