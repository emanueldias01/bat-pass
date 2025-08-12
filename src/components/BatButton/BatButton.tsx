import { Pressable, Text, View } from "react-native"
import styles from "./Style"
import BatTextInput from "../BatTextInput/BatTextInput"
import { useState } from "react"
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';


export default function BatButton(){

    const [pass, setPass] = useState('');

    const handlePass = () => {
        const password = generatePass();
        setPass(password);
    }
    
    const handleCopyPass = async () => {
        await Clipboard.setStringAsync(pass);
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <BatTextInput pass={pass}/>
            </View>
            
            <Pressable
                style={styles.button}
                onPress={handlePass}
            >
                <Text style={styles.text}>⚡GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleCopyPass}
            >
                <Text style={styles.text}>📋COPY</Text>
            </Pressable>
            
        </View>
    )
}