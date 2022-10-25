import { AntDesign } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"
import { styles } from "../css/Styles"

export default function Header () {
    return (
        <View style={styles.header}>
            <Image source={{uri:"https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1fa80.png"}} style={styles.logo} />
            <Text style={styles.titulo}> Livraria YoYo </Text>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
    )
}