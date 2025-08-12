import { Button, Pressable, Text, View } from "react-native"
import styles from "./Style"

export default function BatButton(){
    return(
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => console.log("GENERATE")}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => console.log("COPY")}
            >
                <Text style={styles.text}>COPY</Text>
            </Pressable>
            
        </View>
    )
}