import { TextInput, View } from "react-native";
import styles from "./Style";

interface PropsTextInput{
    pass : string
}

export default function BatTextInput(props : PropsTextInput){
    return(
        <TextInput style={styles.inputer}
            placeholder="pass"
            value={props.pass}
        ></TextInput>
    )
};