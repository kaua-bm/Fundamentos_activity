import { useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { Product } from "../components/product"
import { style } from "./styles";


export function Home() {
function addProduct(name: String){}

    return (
    <View style={style.container}>
        <View style={style.purpleContainer}>
            <Text style={style.title}>Lista de Compras</Text>
        </View>

        <View style={style.input}>
            <Text style={style.title}>Adicione um novo produto</Text>
        </View>

        <TouchableOpacity style={style.trash} onPress={addProduct}>
          <Text style={style.trash}>+</Text>
        </TouchableOpacity>
    </View>
  )
  
}

