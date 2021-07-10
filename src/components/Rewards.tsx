import React from 'react';
import 
{
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Animated,
    Image
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import trash from '../assets/trash.png'

import Swipeable from 'react-native-gesture-handler/Swipeable';

import 
{
    RectButton
} from 'react-native-gesture-handler'

export function Rewards()
{
    return(
        <Swipeable
            overshootRight = {false}
            renderRightActions = {() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style = {styles.buttonRemove} 
                        >
                            <Text style = {styles.xText}>X</Text>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <View
            style = {styles.container}
            >
            <Text style = {styles.text}>Nome da Tarefa</Text>
            <Text style = {styles.text}>Valor Dela</Text>
            </View>
        </Swipeable>   
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
    },
    buttonRemove:
    {
        width: 100,
        height: 62.5,
        backgroundColor: colors.red,
        // marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 25,
        // paddingLeft: 15
    },
    xText:
    {
        fontFamily: fonts.ButtonText,
        color: colors.white,
        fontSize: 58,
        left: 10,
    }
})