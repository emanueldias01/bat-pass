import { Text, View } from "react-native";
import styles from "./Style";
import BatLogo from "../../components/BatLogo/BatLogo";
import BatTestInput from "../../components/BatTestInput/BatTestInput";
import { StatusBar } from "expo-status-bar";
import BatButton from "../../components/BatButton/BatButton";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatTestInput />
            </View>

            <View style={styles.buttonsContainer}>
                <BatButton />
            </View>

            <StatusBar style="light"/>
        </View>
    )
}