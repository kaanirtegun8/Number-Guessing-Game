import { StyleSheet, SafeAreaView } from "react-native";
import GameStartScreen from "./screnns/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screnns/GameScreen";
import GameOverScreen from "./screnns/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isTheGameOver, setIsTheGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsTheGameOver(false)
  };

  const gameOverHandle = () => {
    setIsTheGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setIsTheGameOver(false);
  }

  let screen = (
    <GameStartScreen onPickNumber={pickedNumberHandler}></GameStartScreen>
  );

  if (userNumber)
    screen = (
      <GameScreen
        userNumber={userNumber}
        isTheGameOver={gameOverHandle}
      ></GameScreen>
    );

  if (isTheGameOver && userNumber) {
    screen = <GameOverScreen startNewGame={startNewGameHandler}></GameOverScreen>;
  }

  return (
    <LinearGradient colors={["#00aabb", "#f0f0f0"]} style={styles.container}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
  },
});
