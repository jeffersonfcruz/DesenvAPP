import { Image, View } from "react-native";

export default function Panel() {
    return (
        <View style={{height: "35%"}}>
            <Image source={{uri:"https://movimentoterapeutico.com.br/wp-content/uploads/2019/09/tRESLIVROS.png"}} 
            style={{width: "100%", height: "100%" , resizeMode: "cover"}} />
        </View>
    )
}