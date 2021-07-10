import React from 'react';
import 
{
    StyleSheet,
    SafeAreaView,
    Text,
    FlatList,
    View
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Profile } from '../components/Profile';

import users from '../data/UsersChildren';

export function SubAccountsList()
{
    return(
        <SafeAreaView style = {styles.container}> 
            <Text style = {styles.text}>Subcontas</Text>
            <View>
                <FlatList 
                    data = {users}
                    renderItem = {({ item }) => (
                        <Profile title = {item.name} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center'
    },
    text:
    {   
        fontFamily: fonts.text,
        fontSize: 36,
        marginBottom: '5%'
    },
})