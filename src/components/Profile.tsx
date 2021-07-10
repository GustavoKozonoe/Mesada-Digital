import React from 'react';
import 
{
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ProfileProps{
    title: string;
}

export function Profile({ title, ...rest }: ProfileProps)
{
    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image 
                    style = {styles.image}
                    source = {avatar}
                />
            </View>
            
            <Text style = {styles.text}>{title}</Text>
            <TouchableOpacity 
                style = {styles.Visualize}
                // onPress = {() => {navigation.navigate('VisualizeTask')}}
            >
                <Text>
                    Visualizar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        width: 318,
        height: 62.5,
        backgroundColor: colors.blue_dark,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 5,
        margin: '3%'
    },
    imageContainer:
    {
        width: 49,
        height: 47,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor: colors.white
    },
    image:
    {
        width: 36,
        height: 34
    },
    text:
    {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18
    },
    Visualize:{
        width: 102,
        height: 30,
        backgroundColor: colors.yellow,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5
    },
})
