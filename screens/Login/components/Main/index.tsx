import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../../css/Styles";
import { useState } from "react";
import { ipnode } from "../../../../config/ip";

export default function Main(props: any) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Usuário"
        keyboardType="default"
        style={styles.caixa}
        value={usuario}
        onChangeText={(value) => setUsuario(value)}
      />
      <TextInput
        secureTextEntry
        placeholder="Senha"
        style={styles.caixa}
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />

      <TouchableOpacity
        onPress={() => {
          // efetuarLogin(usuario, senha);
          props.acao.navigate("Home");
        }}
        style={styles.btntllogin}
      >
        <Entypo name="login" size={24} color="black" />
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.acao.navigate("Cadastro")}
        style={styles.btntlcadastrar}
      >
        <Entypo name="add-user" size={24} color="black" />
        <Text>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

function efetuarLogin(usuario: any, senha: any) {
  if (usuario == "" || senha == "") {
    return Alert.alert("Erro", "Você deve preecher todos os campos");
  }

  fetch (`${ipnode}/api/usuarios/login`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nomeusuario: usuario,
      senha: senha,
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((err) => console.error(`Erro -> ${err}`));
}
