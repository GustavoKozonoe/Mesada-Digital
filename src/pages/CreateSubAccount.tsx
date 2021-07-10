import { useNavigation } from "@react-navigation/native";
import React from "react";
import 
{
    SafeAreaView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Image,
    View,
    Text,
    Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-picker';


import { Button } from "../components/Button";
import { Input } from "../components/Input";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import avatar from "../assets/avatar.png"

export function CreateSubAccount()
{
    const navigation = useNavigation();

    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
                >
                    <Input title = 'Nome' password = {false} />

                    <Input title = 'Email' password = {false} />

                    <Input title = 'Código' password = {true} />

                    <View style = {styles.subContainer}>
                        <Text style = {styles.text}>
                            Escolha uma imagem
                        </Text>
                        <Text style = {styles.text}>
                            para ser seu avatar
                        </Text>
                        
                        <TouchableOpacity 
                            style = {styles.circle}
                        >
                            <Image source = {avatar} style = {styles.image}/>
                        </TouchableOpacity>
                    </View>
                    

                    <Button 
                        title="Criar conta" 
                    />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    subContainer:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
        fontFamily: fonts.ButtonText,
        textAlign: 'center'
    },
    input:{
        borderWidth: 1,
        width: 290,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.white
    },
    circle:
    {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderWidth: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:
    {
        width: 140,
        height: 130,
    }
})
