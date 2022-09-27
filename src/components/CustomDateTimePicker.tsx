import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../utils/Colors";
import { CustomTextInput } from "./CustomTextInput";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FormatDate } from "../utils/Helper";

interface CustomDateTimePickerProps {
  valueInput: string;
  textLabel: string;
  showDatePicker?: boolean;
  handleShowPicker?: () => void;
  onDatePickerChange?: (date: Date) => void;
}

export function CustomDateTimePicker(props: CustomDateTimePickerProps) {
  const {
    valueInput,
    textLabel,
    showDatePicker,
    handleShowPicker,
    onDatePickerChange,
  } = props;

  const onConfirm = (data) => {
    onDatePickerChange(FormatDate(data));
  };

  const onCancel = (data) => handleShowPicker();

  return (
    <>
      <TouchableOpacity onPress={handleShowPicker}>
        <CustomTextInput
          valueInput={valueInput}
          textLabel={textLabel}
          editable={false}
          textInputStyle={{ color: "black" }}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        isDarkModeEnabled={false}
        maximumDate={new Date()}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}
