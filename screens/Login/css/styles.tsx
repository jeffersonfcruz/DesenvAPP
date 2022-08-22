import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    margin: 10,
  },
  caixa: {
    width: 300,
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderColor: "silver",
    borderWidth: 1,
  },
  btntllogin: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    marginLeft: "auto",
    marginRight: "auto"
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
