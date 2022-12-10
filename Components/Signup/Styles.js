import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        marginTop: 150,
        marginHorizontal: 30,

    },
    title: {
        fontSize: 30,

    },
    textInput: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#01579B",
        marginBottom: 20,
    },
    pressable: {
        width: '70%',
        justifyContent: "center",
        height: 40,
        alignItems:'center',
        borderWidth: 2,
        backgroundColor:"#01579B",
        borderColor:'#01579B',
        borderBottomEndRadius: 20,
        borderTopLeftRadius: 20,

    },
    pressableText: {
        fontSize: 20,
        color:'white'

    }

})

export default Styles;