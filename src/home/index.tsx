import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { styles } from "./styles";
import Product from "/Users/kauabarcelosdemorais/desenvolvimento/atividade01/atividade01/src/components/product";

export default function Home() {
  const [products, setProducts] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");

  function handleAddProduct() {
    if (newProduct.trim().length === 0) return;
    setProducts((prev) => [...prev, newProduct]);
    setNewProduct("");
  }

  function handleToggleProduct(item: string) {
    if (completed.includes(item)) {
      setCompleted((prev) => prev.filter((i) => i !== item));
      setProducts((prev) => [...prev, item]);
    } else {
      setCompleted((prev) => [...prev, item]);
      setProducts((prev) => prev.filter((i) => i !== item));
    }
  }

  function handleRemove(item: string) {
    setProducts((prev) => prev.filter((i) => i !== item));
    setCompleted((prev) => prev.filter((i) => i !== item));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Compras</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova produto"
          placeholderTextColor="#808080"
          value={newProduct}
          onChangeText={setNewProduct}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>＋</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tab}>
          Produtos <Text style={styles.counter}>{products.length}</Text>
        </Text>
        <Text style={styles.tab}>
          Finalizados <Text style={styles.counter}>{completed.length}</Text>
        </Text>
      </View>

      {products.length === 0 && completed.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/listaFigma.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>
            Você ainda não tem produtos na lista de compra
          </Text>
          <Text style={styles.emptySubText}>
            Adicione produtos e organize sua lista de compras
          </Text>
        </View>
      ) : (
        <FlatList
          data={[...products, ...completed]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Product
              name={item}
              completed={completed.includes(item)}
              onToggle={() => handleToggleProduct(item)}
              onRemove={() => handleRemove(item)}
            />
          )}
        />
      )}
    </View>
  );
}
