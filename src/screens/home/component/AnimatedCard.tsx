import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { AnimatedRef, SharedValue } from "react-native-reanimated";
import { homeData, OnboardingData } from "../../../db/animated-slide";
import {
  Box,
  Text,
  HStack,
  ImageBackground,
  VStack,
} from "@gluestack-ui/themed";
import { DirectRight } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { EDataType } from "../../../db/slide-data";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
};

const AnimatedCard = ({
  item,
  index,
  x,
  flatListIndex,
  flatListRef,
}: Props) => {
  const navigation = useNavigation<any>();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <VStack width={SCREEN_WIDTH}>
      <Box alignItems="center">
        <ImageBackground
          source={homeData[index].imgSrc}
          style={{
            width: SCREEN_WIDTH - 32,
            height: (426 / 343) * SCREEN_WIDTH - 32,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
          resizeMode="contain"
        >
          <TouchableOpacity
            onPress={() => {
              if (flatListIndex.value < homeData.length - 1) {
                flatListRef.current?.scrollToIndex({
                  index: flatListIndex.value + 1,
                });
              } else {
                flatListRef.current?.scrollToIndex({ index: 0 });
              }
            }}
          >
            <Box
              w={"$16"}
              h={"$16"}
              rounded={"$full"}
              bgColor="$coolGray100"
              justifyContent="center"
              alignItems="center"
            >
              <DirectRight size="32" color="#E4301E" variant="Bold" />
            </Box>
          </TouchableOpacity>
        </ImageBackground>
      </Box>
      <VStack p="$4" gap="$2">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight={"$semibold"} fontSize={"$xl"} color="$coolGray800">
            {item.title}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail", {
                id: item.id,
                type: EDataType.BASIC,
              });
            }}
          >
            <Text fontSize={"$md"} color="$coolGray500" underline>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </HStack>
        <Text>{item.description}</Text>
      </VStack>
    </VStack>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({});
