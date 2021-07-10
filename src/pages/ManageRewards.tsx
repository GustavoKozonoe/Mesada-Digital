import areIntervalsOverlappingWithOptions from 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js';
import React from 'react';
import 
{
    StyleSheet,
    SafeAreaView,
    View,
    Text,

} from 'react-native';
import { Rewards } from '../components/Rewards';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function ManageRewards()
{
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.subContainer}>
                <Text style = {styles.text}>Gerenciar</Text>
                <Text style = {styles.text}>Recompensas</Text>
            </View>
            <View>
                <Rewards />
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
        marginBottom: '5%',
        alignItems: 'center'
    },
    text:
    {
        fontFamily: fonts.ButtonText,
        fontSize: 36
    },
    
})