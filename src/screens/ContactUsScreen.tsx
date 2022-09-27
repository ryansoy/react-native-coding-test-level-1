import React from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { emailRegEx, nameRegEx } from "../utils/RegEx";
import {
  CustomButton,
  CustomTextInput,
  CustomDateTimePicker,
} from "../components";
import { FormatDate } from "../utils/Helper";

export function ContactUsScreen({ navigation }) {
  const [userName, setuserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState(FormatDate(new Date()));
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const handleSubmit = () => {
    switch (true) {
      case userName == "":
        Alert.alert("Error", "Invalid User Name");
        break;
      case !nameRegEx.test(userName):
        Alert.alert("Error", "User Name must contain only letters");
        break;
      case !emailRegEx.test(email):
        Alert.alert("Error", "Invalid email address");
        break;
      default:
        Alert.alert(
          "User Information",
          `User Name: ${userName}\nEmail: ${email}\nDate of Birth: ${birthday}`
        );
        break;
    }
  };

  return (
    <>
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <CustomTextInput
            valueInput={userName}
            textLabel="User Name"
            placeholder="John"
            onChangeText={(value) => {
              setuserName(value);
            }}
          />
          <CustomTextInput
            valueInput={email}
            textLabel="Email"
            keyboardType={"email-address"}
            placeholder="test@test1.com"
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <CustomDateTimePicker
            valueInput={birthday}
            showDatePicker={showDatePicker}
            textLabel="Date of Birth"
            onDatePickerChange={(data) => {
              setBirthday(data);
              setShowDatePicker(!showDatePicker);
            }}
            handleShowPicker={() => {
              setShowDatePicker(!showDatePicker);
            }}
          />
          <CustomButton text={"Submit"} onPress={handleSubmit} />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}
