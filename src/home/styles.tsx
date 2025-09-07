import { useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "../components/product"



export const style = StyleSheet.create({
  container: {
    backgroundColor:"#F2F2F2",
    width: 393,
    height: 852,
    flex: 1,
  },
  purpleContainer: {
    width: 393,
    height: 173,
    backgroundColor:"#7A4A9E",
    justifyContent:"center",
    alignItems:"center",
  },
  title: {
    color: "#F2F2F2",
    fontSize:18,
    fontWeight: "bold",
    lineHeight:25.2,
  },
  input: {
    flex:1,
    backgroundColor: "#fff",
    padding:16,
    alignItems:"center",
    borderRadius: 5,
    borderColor: "#808080"
  },
  trash:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31C667",
    alignItems: "center",
    justifyContent: "center"
  }


})