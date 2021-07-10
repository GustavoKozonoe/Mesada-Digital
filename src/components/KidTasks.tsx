import { useNavigation } from "@react-navigation/native";
import React, { useState }  from "react";
import 
{
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
    View
} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface TaskProps extends TouchableOpacityProps {
    title : string;
    value: number;
}

export function Tasks({ title, value, ...rest }: TaskProps){
    const navigation = useNavigation();
    const [isClicked, setIsClicked] = useState(false);

    function handleClickedButton(){
        setIsClicked(!isClicked);
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.Subcontainer}>
                <TouchableOpacity 
                    onPress = {handleClickedButton}
                    style = {[styles.check, isClicked && { backgroundColor: colors.green }]}
                >

                </TouchableOpacity>
                <View style = {styles.areaText}>
                    <Text style = {styles.text}>
                        { title }
                    </Text>
                    <Text style = {styles.text}>
                        { value }
                    </Text>
                </View>
            </View>
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
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 5,
        margin: '3%'
    },
    Subcontainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    check:
    {
        width: 44,
        height: 43,
        backgroundColor: colors.white,
        marginRight: 5
    },
    areaText:
    {
        justifyContent: 'space-between',

    },
    text:
    {
        color: colors.white,
        fontFamily: fonts.text,
        textAlign: 'right'
    },
    buttonText:{
        fontFamily: fonts.ButtonText,
        color: colors.white,
        fontSize: 18
    }

})
