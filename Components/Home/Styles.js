import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    pressable:{
        width: 200,
        height: 60,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor:'#01579B',
        borderColor:'#01579B',

    },
    pressableText:{
        fontSize: 20,
        color:"white",
        fontWeight:'bold',
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
        fontSize: 18,
        color:'black',
    }

})

export default Styles;