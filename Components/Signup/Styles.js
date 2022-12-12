import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        marginTop: 150,
        marginHorizontal: 30,

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',


    },
    textInput: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#01579B",
        marginBottom: 20,
        padding: 10,
        fontSize: 20,

    },
    pressable: {
        width: '80%',
        justifyContent: "center",
        height: 50,
        alignItems:'center',
        borderWidth: 2,
        backgroundColor:"#01579B",
        borderColor:'#01579B',
        borderBottomEndRadius: 20,
        borderTopLeftRadius: 20,

    },
    pressableText: {
        fontSize: 25,
        color:'white',
        fontWeight: 'bold',


    }

})

export default Styles;