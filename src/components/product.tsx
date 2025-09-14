import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

interface ProductProps {
  name: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export default function Product({ name, completed, onToggle, onRemove }: ProductProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
        <Text style={{ color: completed ? "#7A4A9E" : "#31C667" }}>
          {completed ? "✔" : "○"}
        </Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.name,
          completed && { textDecorationLine: "line-through", color: "#9CA3AF" },
        ]}
      >
        {name}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image 
          source={require("../../assets/trash.png")}
          style={styles.trash}
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
}