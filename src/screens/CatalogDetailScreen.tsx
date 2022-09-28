import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { getCatalogDetail } from "../services/CatelogApi";
import { Colors } from "../utils/Colors";

export function CatalogDetailScreen(props) {
  const catalogName = props?.route?.params?.catalogName;
  const screenWidth = Dimensions.get("window").width * 0.5;
  const [catalogDetail, setcatalogDetail] = React.useState<Object>();

  React.useEffect(() => {
    handleGetCatalogDetail();
  }, []);

  const handleGetCatalogDetail = async () => {
    try {
      const categoryRes = await getCatalogDetail(catalogName);
      setcatalogDetail(categoryRes);
    } catch (error) {}
  };

  const screenStyle = StyleSheet.create({
    detailsWrapper: {
      marginBottom: 20,
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      color: Colors.black,
      marginBottom: 10,
      width: "95%",
      textAlign: "center",
      fontWeight: "bold",
      padding: 5,
      backgroundColor: "#D3D3D3",
      borderRadius: 5,
    },
    description: {
      fontSize: 16,
      fontWeight: "500",
      color: Colors.black,
      textTransform: "capitalize",
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: catalogDetail?.sprites?.other["official-artwork"]
                ?.front_default,
            }}
            style={{
              width: screenWidth,
              height: screenWidth,
            }}
            resizeMode="contain"
          />
        </View>

        {/* Abilities Name */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Abilities Name</Text>
          {catalogDetail?.abilities?.map((value, index) => (
            <Text key={index} style={screenStyle.description}>
              {value.ability.name}
            </Text>
          ))}
        </View>

        {/* Base Experience */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Base Experience</Text>
          <Text style={screenStyle.description}>
            {catalogDetail?.base_experience}
          </Text>
        </View>

        {/* Game Indices */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Game Indices</Text>
          {catalogDetail?.game_indices?.map((value, index) => (
            <Text key={index} style={screenStyle.description}>
              {value.version.name}
            </Text>
          ))}
        </View>

        {/* Move */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Move</Text>
          {catalogDetail?.moves?.map((value, index) => (
            <Text key={index} style={screenStyle.description}>
              {value.move.name}
            </Text>
          ))}
        </View>

        {/* States */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>States</Text>
          {catalogDetail?.stats?.map((value, index) => (
            <Text key={index} style={screenStyle.description}>
              {value.stat.name}
            </Text>
          ))}
        </View>

        {/* Types */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Types</Text>
          {catalogDetail?.types?.map((value, index) => (
            <Text key={index} style={screenStyle.description}>
              {value.type.name}
            </Text>
          ))}
        </View>

        {/* Weight */}
        <View style={screenStyle.detailsWrapper}>
          <Text style={screenStyle.title}>Weight</Text>
          <Text style={screenStyle.description}>{catalogDetail?.weight}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
