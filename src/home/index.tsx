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
}
