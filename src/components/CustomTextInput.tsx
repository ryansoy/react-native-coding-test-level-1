import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../utils/Colors";

interface CustomTextInputProps {
  valueInput: string;
  textLabel: string;
  placeholder?: string;
  maxLength?: number;
  textInputStyle?: object;
  keyboardType?: string;
  editable?: boolean;
  onChangeText?: (value: string) => void;
}

const inputStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.6,
    height: 40,
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 7,
    padding: 10,
    backgroundColor: Colors.white,
  },
});

export function CustomTextInput(props: CustomTextInputProps) {
  const {
    valueInput,
    textLabel,
    maxLength = 50,
    onChangeText,
    placeholder,
    textInputStyle,
    keyboardType = "default",
    editable = true,
  } = props;

  return (
    <View
      pointerEvents={editable ? "auto" : "none"}
      style={{
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20,
        alignContent: "flex-start",
      }}
    >
      <Text
        style={{
          textAlign: "left",
          alignSelf: "center",
          width: 90,
        }}
      >
        {textLabel}
      </Text>
      <TextInput
        style={[inputStyle.container, textInputStyle]}
        value={valueInput}
        maxLength={maxLength}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={editable}
        onChangeText={onChangeText}
      />
    </View>
  );
}
