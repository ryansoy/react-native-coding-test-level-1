import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

interface CustomButtonProps {
  text: string;
  wrapperStyle?: object;
  textStyle?: object;
  onPress?: () => void;
}

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    // padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: 30,
    width: 150,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonTitle: {
    fontSize: 15,
    color: Colors.white,
  },
});

export function CustomButton(props: CustomButtonProps) {
  const { text, wrapperStyle, textStyle, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.buttonContainer, wrapperStyle]}
    >
      <Text style={[buttonStyle.buttonTitle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}
