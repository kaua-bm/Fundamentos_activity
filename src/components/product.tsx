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

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  checkbox: {
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  trash: {
    width: 12.478,          
    height: 14,         
    tintColor: "#333",
  },
});

