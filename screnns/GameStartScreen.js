import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameStartScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const changeNumberHandler = (number) => {
    setEnteredNumber(number);
  };

  const resetNumber = () => {
    setEnteredNumber('');
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!','Number has to be number between 1 and 99.',[{
        text: 'Okay', style: 'destructive', onPress: resetNumber
      }])
      return;
    }
    props.onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <Title title={'Choose Number'} ></Title>
      <View style={styles.numberInputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={changeNumberHandler}
          value={enteredNumber}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    elevation: 6, // only android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    flexDirection: "column",
  },
  numberInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttons: {
    width: "50%",
  },
});

export default GameStartScreen;
