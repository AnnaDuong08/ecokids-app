import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import {
  Image,
  Box,
  Text,
  VStack,
  ScrollView,
  HStack,
} from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { quizzSlideImg } from "../../db/animated-slide";
import Pagination from "./components/Pagination";

const Quizz = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <ScrollView flex={1} bg="$white" showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} />
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <VStack justifyContent="space-between" mb={"$4"}>
          <Text fontWeight="$semibold" fontSize={"$3xl"} color="$black">
            Câu hỏi
          </Text>
          <Text fontWeight="$semibold" fontSize={"$lg"} color="$coolGray500">
            Lựa chọn cấp độ câu hỏi
          </Text>
        </VStack>
      </VStack>

      <Animated.FlatList
        onScroll={onScroll}
        data={quizzSlideImg}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("QuizzScreen", { level: item.level })
              }
            >
              <View style={{ width: SCREEN_WIDTH, alignItems: "center" }}>
                <Image
                  source={item.imgSrc}
                  style={{
                    width: SCREEN_WIDTH - 32,
                    height: (426 / 343) * SCREEN_WIDTH - 32,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                  alt="image"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      <Box px="$8" my="$4">
        <Pagination data={quizzSlideImg} x={x} />
        <Text color="$coolGray500" fontSize={"$md"}>
          Môi trường bao gồm các yếu tố tự nhiên và yếu tố vật chất nhân tạo
          quan hệ mật thiết với nhau, bao quanh con người, có ảnh hưởng tới đời
          sống, sản xuất, sự tồn tại, phát triển của con người và thiên nhiên.
        </Text>
      </Box>
    </ScrollView>
  );
};

export default Quizz;

const styles = StyleSheet.create({
  textmain: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    width: "100%",
    height: 41,
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#FFFFFF",
  },
});
