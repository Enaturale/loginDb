import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    pressable:{
        width: 200,
        height: 50,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor:'#01579B',
        borderColor:'white'

    },
    pressableText:{
        fontSize: 20,
        color:"white"
    },
    background:{
        flex: 1,
        justifyContent:'center',
        width:'100%'
    },
    title:{
        fontStyle:'italic',
        fontWeight:'bold',
        marginBottom:10,
        fontSize: 15,
    }

})

export default Styles;