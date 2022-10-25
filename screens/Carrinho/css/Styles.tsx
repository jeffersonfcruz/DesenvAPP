import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 2,
        padding: 10,
        paddingTop: 20,
      },
      logo: {
        width: 50,
        height: 50,
        resizeMode: "cover",
      },
      titulo: {
        fontSize: 20,
        color: "white",
        fontweight: "bold",
      },
      btncarrinho: {
        padding:20,
        backgroundColor:"#600",
        margin:20,
        borderRadius:50,
        width:"50%",
        marginLeft:"auto",
        marginRight:"auto"
      },
      txtcarrinho: {
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        textAlign:"center",
      },
      produto: {
        padding:10,
        fontSize: 20,
        fontWeight: "bold",
      },
      preco: {
        padding: 10,
        color:"#900",
        fontWeight: "bold",
        fontSize: 15,
      },
      quantidade: {
        fontSize: 15,
        color: "darkblue",
        fontWeight: "bold",
        paddingLeft: 10,
      },
      btnremovercarrinho: {
        backgroundColor: "black",
        width: 100,
        height: 30,
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto"
      },
      fecharpedido: {},
      txtfecharpedido: {}
});