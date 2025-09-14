import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#7A4A9E", 
    paddingTop: 90,
    paddingBottom: 80,
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    flexDirection: "row",
    marginTop: -25,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
  },
  button: {
    marginLeft: 8,
    backgroundColor: "#31C667",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
