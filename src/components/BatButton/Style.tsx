import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        
    },
    button: {
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        alignContent: 'center',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3
    },
    text: {
        color: '#E5BF3C',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.25
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default styles;