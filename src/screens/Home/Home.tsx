import { Text, View } from "react-native";
import styles from "./Style";
import BatLogo from "../../components/BatLogo/BatLogo";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <BatLogo />
            </View>
            <Text>Olá</Text>
        </View>
    )
}