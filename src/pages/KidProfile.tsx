import React from 'react';
import 
{
    SafeAreaView,
    View,
    StyleSheet,
    Text,

} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function KidProfile()
{
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}>Perfil</Text>
            <View style = {styles.box}>
                <View style = {styles.mainText}>
                    <Text style = {styles.text}>Nome</Text>
                    <View style = {styles.count}>
                        <Text style = {styles.countText}>Gustavo Kozonoe</Text>
                    </View>
                </View>
                <View style = {styles.mainText}>
                    <Text style = {styles.text}>Email</Text>
                    <View style = {styles.count}>
                        <Text style = {styles.countText}>gustavo@mpr.com.br</Text>
                    </View>
                </View>
                <View style = {styles.mainText}>
                    <Text style = {styles.text}>Moedas</Text>
                    <View style = {styles.count}>
                        <Text style = {styles.countText}>9999</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    title:
    {
        fontFamily: fonts.ButtonText,
        fontSize: 36,
        marginBottom: '25%'
    },
    box:
    {
        borderWidth: 1,
        width: 340,
        height: 463,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5%',
        backgroundColor: colors.blue_dark,
        borderRadius: 30
    },
    text:
    {
        fontFamily: fonts.text,
        color: colors.white,
        marginBottom: '5%',
        fontSize: 18
    },
    mainText:
    {
        alignItems: 'center',
    },
    count:
    {
        backgroundColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        width: 265,
        height: 37,
        justifyContent: 'center'
    },
    countText:
    {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 16
    }
})