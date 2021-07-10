import React  from "react";
import 
{
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
    title : string;
}

export function Button({ title, ...rest }: ButtonProps){
    return(
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style = {styles.buttonText}>{ title }</Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    button:{
        width: 311,
        height: 52,
        backgroundColor: colors.blue,
        borderRadius: 38,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    buttonText:{
        fontFamily: fonts.ButtonText,
        color: colors.white,
        fontSize: 18
    }

})


