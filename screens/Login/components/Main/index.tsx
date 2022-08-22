import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons , AntDesign } from '@expo/vector-icons';
import { NativeScreenNavigationContainer } from "react-native-screens";
import { styles } from "../../css/styles";
import { useState } from "react";

export default function Main (props) {
    
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");



    return (
        <View>
            <TextInput placeholder="Usuário" keyboardType="default" style={styles.caixa} 
            value={usuario} 
            onChangeText={(value)=> setUsuario(value)}/>
            
            <TextInput secureTextEntry placeholder="Senha" style={styles.caixa}
            value={senha} 
            onChangeText={(value)=> setSenha(value)}/>
            <View style={styles.viewbtn}>
            	<TouchableOpacity onPress={() => {
                	efetuarLogin(usuario,senha);
            	}} 
            	style={styles.btntllogin}>
                	<SimpleLineIcons name="login" size={24} color="green" />
                	<Text>Login</Text>
            	</TouchableOpacity>

            	<TouchableOpacity onPress={() => props.acao.navigate("Cadastro")} style={styles.btntlcadastrar}>
            	<AntDesign name="adduser" size={24} color="green" />
                	<Text>Cadastro</Text>
            	</TouchableOpacity>
			</View>
        </View>
    )
}
function efetuarLogin(usuario:any,senha:any) {
    if (usuario == "" || senha == ""){
        return Alert.alert("Erro", "você deve preencher todos os campos");
    }
    fetch ("http://10.26.49.27:8080/api/usuarios/login" , {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
    body: JSON.stringify({
        nomeusuario: usuario,
        senha: senha
    })
    })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((err) => console.error(`Erro -> ${err}`));
}