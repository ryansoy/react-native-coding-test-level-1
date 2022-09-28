import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { CategoryModel } from "../model/CatalogListModel";
import { Colors } from "../utils/Colors";
import { CustomButton } from "./CustomButton";

interface CustomCategoryListItemProps {
  item: CategoryModel;
  onClickDetail: (name: string) => void;
}

const itemStyle = StyleSheet.create({
  wrapperContainer: {
    paddingVertical: 10,
    paddingHorizontal: 11,
    backgroundColor: "#A9A9A9",
    flexDirection: "column",
    borderRadius: 10,
    shadowColor: "#C8C8C8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonTitle: {
    fontSize: 15,
    color: Colors.white,
    alignSelf: "center",
    textTransform: "capitalize",
  },
});

export function CustomCategoryListItem(props: CustomCategoryListItemProps) {
  const { item, onClickDetail } = props;

  return (
    <View style={itemStyle.wrapperContainer} key={item.index}>
      <Text style={itemStyle.buttonTitle}>{item?.name || ""}</Text>
      <CustomButton text={"View"} onPress={() => onClickDetail(item?.name)} />
    </View>
  );
}
