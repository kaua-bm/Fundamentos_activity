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
},
