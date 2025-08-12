import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image : {
        resizeMode: 'contain',
        height: 180
    },
    text : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#E5BF3C'
    }
})

export default styles;