import { TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../../css/styles";
import { useState } from "react";
import { ipnode } from "../../../../config/ip";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mystore.banco");

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
          efetuarLogin(usuario, senha);
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

  fetch(`${ipnode}/api/usuarios/login`, {
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
    .then((rs) => {
      console.log(rs);
      gravarusuario(rs.payload[0].idusuario, rs.output, rs.token);
    })

    .catch((err) => console.error(`Erro -> ${err}`));
}
function gravarusuario(idusuario: any, situacao: any, token: any) {
  db.transaction((ts) => {
    ts.executeSql(
      `create table if not exists dados (
         id integer primary key,
         idusuario int,
         situacao text,
         token text,
       )`
    );
  });
  db.transaction((tx) => {
    tx.executeSql(
      `insert into dados (
        idusuario,
        situacao,
        token
        ) values (?,?,?)`,
      [idusuario, situacao, token]
    );
    tx.executeSql(`select * from dados`, [], (_, { rows }) => {
      console.log(rows);
    });
  });
}
