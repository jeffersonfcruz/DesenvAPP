import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  titulo: {
    fontSize: 20,
    margin: 10,
    color: "white",
  },
  caixa: {
    width: 300,
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 5,
  },
  btntllogin: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
	  borderRadius: 10
  },
  btntlcadastrar: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    marginLeft: "auto",
    marginRight: "auto",
	borderRadius: 10
  },
  viewbtn :{
	display: "flex",
	flexDirection: "row"
  }
});
