import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";

export default function Detalhes({route}) {
    const {idproduto}= route.params;

    return (
        <View style = {{flex: 1}}>
            <ScrollView>
            <Header />
            <Content idproduto={idproduto} />
            </ScrollView>
        </View>
    )
}