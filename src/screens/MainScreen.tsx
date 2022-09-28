import React from "react";
import { View } from "react-native";
import { CustomButton } from "../components/CustomButton";

export function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CustomButton
        text={"Contact Us"}
        onPress={() => {
          navigation.navigate("ContactUsScreen");
        }}
      />

      <CustomButton
        text={"View Catalog"}
        onPress={() => {
          navigation.navigate("CatalogListScreen");
        }}
      />
    </View>
  );
}
