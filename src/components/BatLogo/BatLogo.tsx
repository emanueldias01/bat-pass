import { Image, View, Text } from "react-native";
import logo from '../../../assets/bat-logo.png'
import styles from "./Style";

export default function BatLogo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BAT PASS GENERATOR</Text>
            <Image source={logo} style={styles.image}/>
        </View>
    )
};