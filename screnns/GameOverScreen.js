import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOverScreen = ({startNewGame}) => {
  const startNewGameHandler = () => {
    startNewGame();
  };

  return (
    <View style={styles.gameOverContainer}>
      <Title title={"Game Over"}></Title>
      <PrimaryButton onPress={startNewGameHandler}>Start New Game</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  gameOverContainer: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
  },
  gameOverText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#d67",
  },
});

export default GameOverScreen;
