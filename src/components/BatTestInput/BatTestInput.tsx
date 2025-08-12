import { TextInput, View } from "react-native";
import styles from "./Style";

export default function BatTestInput(){
    return(
        <TextInput style={styles.inputer}
            placeholder="pass"
        ></TextInput>
    )
};