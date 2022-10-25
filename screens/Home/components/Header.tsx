import { AntDesign } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/Styles"

export default function Header (props:any) {
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1fa80.png"}} style={styles.logo} />
            <Text style={styles.titulo}> Livraria YoYo </Text>
        <TouchableOpacity onPress={()=>{
            props.tela.navigate("Carrinho")
        }}>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
        </View>
    )
}