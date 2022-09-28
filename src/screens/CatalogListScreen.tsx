import React from "react";
import _ from "lodash";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  RefreshControl,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomCategoryListItem } from "../components";

import { CategoryModel, GetCategoryListModel } from "../model/CatalogListModel";
import { getCatalogList, getCatalogDetail } from "../services/CatelogApi";
import { Colors } from "../utils/Colors";
import { CategoryListTransform } from "../Transform";

export function CatalogListScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const [localLoading, setLocalLoading] = React.useState(false);
  const [showNoList, setShowNoList] = React.useState(false);
  const [isEnd, setIsEnd] = React.useState(false);
  const [offSet, setOffSet] = React.useState(0);
  const [categoryListData, setcategoryListData] =
    React.useState<CategoryModel[]>();

  React.useEffect(() => {
    setLocalLoading(true);
    handleGetCategoryList(true);
  }, []);

  const handleGetCategoryList = async (isRefresh: boolean) => {
    const limit = 10;
    try {
      // PREPARE PAYLOAD
      const payload: GetCategoryListModel = {
        limit,
        offset: offSet + limit,
      };

      if (isRefresh) {
        payload.offset = 0;
      }

      const categoryRes = await getCatalogList(payload.offset);

      const { results } = categoryRes;

      // TRANSFORM DATA
      const transformFollowing = CategoryListTransform(results);

      setShowNoList(_.isEmpty(results) ? true : false);
      if (isRefresh) {
        setcategoryListData(transformFollowing);
      } else {
        setcategoryListData((prev) => prev.concat(transformFollowing));
      }

      setIsEnd(results.length < limit ? true : false);
      setOffSet(payload.offset);
      setLocalLoading(false);
    } catch (error) {
      setLocalLoading(false);
    }
  };

  const keyExtractorHelper = (item, index: number) => String(index);
  const renderSeparator = () => <View style={{ width: "100%", height: 6 }} />;

  const renderCategoryList = ({ item }) => (
    <CustomCategoryListItem
      item={item}
      onClickDetail={() =>
        navigation.navigate("CatalogDetailScreen", { catalogName: item.name })
      }
    />
  );
  const handleLoadMoreData = () => {
    if (isEnd) {
      return;
    }
    handleGetCategoryList(false);
  };

  const handleLoadNewData = () => {
    handleGetCategoryList(true);
  };

  const renderFooterIndicator = () => (
    <View>
      {!isEnd && !localLoading && (
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <ActivityIndicator size={"small"} color={Colors.primary} />
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.secondary }}>
      <FlatList
        data={categoryListData}
        keyExtractor={keyExtractorHelper}
        renderItem={renderCategoryList}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 20,
          paddingTop: 10,
          flexGrow: 1,
        }}
        style={{ flex: 1, marginTop: 10 }}
        ItemSeparatorComponent={renderSeparator}
        onEndReachedThreshold={0.001}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={handleLoadNewData}
            colors={[Colors.primary]}
          />
        }
        onEndReached={handleLoadMoreData}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>{showNoList && <Text>No Data Available </Text>}</>
        )}
        ListFooterComponent={renderFooterIndicator}
        scrollEventThrottle={16}
      />
    </View>
  );
}
