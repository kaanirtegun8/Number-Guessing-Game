import { Text, StyleSheet } from "react-native";

const Title = ({title}) => {
  return <Text style={styles.title}> {title} </Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#e0d000",
    fontWeight: "bold",
    textAlign: "center",
    padding: 24,
  },
});

export default Title;
