import React from 'react';
import 
{
    StyleSheet,
    SafeAreaView,
    View,
    Text,

} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { KidRewards } from '../components/KidRewards';

export function Shop()
{
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.textHeader}>Loja</Text>
                <View style = {styles.coins}>
                    <Text style = {styles.textCoins}>100 moedas</Text>
                </View>
            </View>
            <View style = {styles.subcontainer}>
                <KidRewards />  
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textHeader:
    {
        fontFamily: fonts.ButtonText,
        fontSize: 36
    },
    coins:
    {
        width: 81,
        height: 38,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    textCoins:
    {
        fontFamily: fonts.text,
        fontSize: 12,
        textAlign: 'center',
    },
    subcontainer:
    {
        alignItems: 'center',
        flex: 1,
        padding: '5%'
    }
})