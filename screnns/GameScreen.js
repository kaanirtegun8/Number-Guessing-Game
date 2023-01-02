import { useEffect, useState } from "react";
import { Text, StyleSheet, View,useWindowDimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const GameScreen = ({ userNumber, isTheGameOver }) => {
  const [counter, setCounter] = useState(0);
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(1);
  const [generatedNumber, setGeneratedNumber] = useState(null);
  useEffect(() => {
    generateNumber();
  }, [counter]);

  const generateNumber = () => {
    setGeneratedNumber(Math.floor(Math.random() * (max - min) + min));
  };

  if (generatedNumber == userNumber) {
    console.log("helloooo");
    isTheGameOver();
  }

  const Lower = () => {
    if (generatedNumber > userNumber) {
      setMax(generatedNumber);
    }
    setCounter((previous) => previous + 1);
  };

  const Higher = () => {
    if (generatedNumber < userNumber) {
      setMin(generatedNumber);
    }
    setCounter((previous) => previous + 1);
  };

  const {width, height} = useWindowDimensions();

  const marginTopDistance = height < 580 ? 0 : 100;

  return (
    <View style={[styles.screen, {marginTop: marginTopDistance}]}>
      <Title title={`Opponent's Guess`}></Title>
      <View style={styles.guessContainer}>
        <Text style={styles.randomNumber}> {generatedNumber} </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={Lower}>
              <Ionicons name="md-remove" size={24} color={"white"}></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onPress={Higher}>
              <Ionicons name="md-add" size={24} color={"white"}></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.logArea}>
        <Text style={styles.logText}>Min: {min}</Text>
        <Text style={styles.logText}>Max: {max}</Text>
        <Text style={styles.logText}>Counter: {counter} </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  guessContainer: {
    padding: 12,
    borderColor: "#742396",
    borderWidth: 4,
    alignItems: "center",
  },
  randomNumber: {
    fontSize: 50,
    color: Colors.primary500,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttons: {
    width: 100,
    margin: 20,
  },
  logArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logText: {
    fontSize: 18,
    color: "#dc0610",
  },
});

export default GameScreen;
