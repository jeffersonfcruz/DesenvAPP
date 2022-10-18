import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, ActivityIndicator } from "react-native";
import { ipspring } from "../../../config/ip";

export default function Content(props:any) {

  const {idproduto} = props;
  
  const [carregando, setcarregando] = useState(true);

  const [produtos, setProdutos] = useState([
    {
      idproduto: "",
      nomeproduto: "",
      descricao: "",
      quantidade: 0,
      preco: "",
      foto1: "foto1.jpg",
      foto2: "foto2.jpg",
      foto3: "foto3.jpg",
      foto4: "foto4.jpg",
    },
  ]);

  useEffect(() => {
    fetch(`${ipspring}/api/produto/pesquisar/${idproduto}`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs);
        setcarregando(false);
        console.log(rs);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Conteúdo</Text>
      {carregando ? (
        <ActivityIndicator size={100} color={"#ft04"} />
      ) : (
        <View/>
      )}
    </View>
  );
}
