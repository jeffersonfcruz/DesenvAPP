import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../css/styles";

export default function Main() {
    
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [cpf,setCpf] = useState("");
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");    
    
    return (
        <ScrollView horizontal={false} style={{flex:1}}>
            <View>
                <TextInput style={styles.caixa} placeholder="Nome" value={nome} onChangeText={(value)=> setNome(value)}/>
                <TextInput style={styles.caixa} placeholder="Email" keyboardType="email-address" value={email} onChangeText={(value)=> setEmail(value)}/>
                <TextInput style={styles.caixa} placeholder="CPF" keyboardType="number-pad" value={cpf} onChangeText={(value)=> setCpf(value)}/>
                <TextInput style={styles.caixa} placeholder="Usuário" value={usuario} onChangeText={(value)=> setUsuario(value)}/>
                <TextInput style={styles.caixa} placeholder="Senha" secureTextEntry value={senha} onChangeText={(value)=> setSenha(value)}/>
                
                <TouchableOpacity style={styles.btntccadastrar} onPress={() => {
                    efetuarCadastro(nome,email,cpf,usuario,senha);
                }}>
                    <Entypo name="save" size={24} color="green"/>
                    <Text> Cadastrar </Text>
                </TouchableOpacity>
        	</View>
        </ScrollView>
    )
}
function efetuarCadastro(nome:any,email:any,cpf:any,usuario:any,senha:any) {
    if (
        nome == "" || 
        email == "" || 
        cpf == "" || 
        usuario == "" || 
        senha == "" ) {
            return Alert.alert("Erro","Você deve preencher todos os campos");
        }
        fetch("http://10.26.49.27:8080/api/usuarios/cadastro", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeusuario: usuario,
                email: email,
                cpf: cpf,
                nomecompleto: nome,
                senha: senha
        })
    })
    .then((response) => response.json())
    .then((rs)=> console.log(rs))
    .catch((erro)=> console.error(`Erro -> ${erro}`))
}