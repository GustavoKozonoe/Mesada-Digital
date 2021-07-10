import React  from "react";
import { useState } from "react";
import {View, TextInput, Text, StyleSheet} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface TitleProps {
    title : string;
    password : boolean;
}

export function Input({ title, password, ...rest } : TitleProps){
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name)
    }
    
    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }
    return(
        <View>
            <Text style = {styles.text}>{title}</Text>
            <TextInput 
                style = {[
                    styles.input,
                    isFilled && { borderColor: colors.green },
                    isFocused && { borderColor: colors.blue },
                ]}
                textAlign = 'center'
                onBlur = {handleInputBlur}
                onFocus = {handleInputFocus}
                onChangeText = {handleInputChange}
                secureTextEntry = {password}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 34,
        fontFamily: fonts.ButtonText
    },
    input:{
        borderWidth: 1,
        width: 290,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.white
    },
})