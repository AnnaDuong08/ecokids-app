import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Text, VStack } from "@gluestack-ui/themed";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import Quizz from "../screens/quizz-mode/Quizz";
import Practice from "../screens/practice/Practice";
import Activity from "../screens/activity/Activity";
import { UseTokenColor } from "../hook/UseTokenColor";

const Tab = createBottomTabNavigator<BottomTabsParams>();

interface ITabIcon {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}
const TabIcon = ({ focused, name, title }: ITabIcon) => {
  const colors = UseTokenColor();
  return (
    <VStack alignItems={"center"}>
      <Ionicons
        name={name}
        size={20}
        color={focused ? colors.primary600 : colors.warmGray600}
      />
      <Text
        fontSize={10}
        fontWeight={"$medium"}
        color={focused ? colors.primary600 : colors.warmGray600}
      >
        {title}
      </Text>
    </VStack>
  );
};

interface ITabData {
  id: number;
  tabName: keyof BottomTabsParams;
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  component: any;
  headerShown: boolean;
}

export const TabData: ITabData[] = [
  {
    id: 1,
    tabName: "Home",
    title: "Bài viết",
    iconName: "home",
    component: Home,
    headerShown: false,
  },
  {
    id: 2,
    tabName: "Quizz",
    title: "Trò chơi",
    iconName: "apps",
    component: Quizz,
    headerShown: false,
  },
  {
    id: 3,
    tabName: "Practice",
    title: "Hoạt động",
    iconName: "information-circle-sharp",
    component: Practice,
    headerShown: true,
  },
  {
    id: 4,
    tabName: "Activity",
    title: "Câu chuyện",
    iconName: "extension-puzzle",
    component: Activity,
    headerShown: true,
  },
];

const TabNavigation = () => {
  const colors = UseTokenColor();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
      }}
    >
      {TabData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.tabName}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                name={tab.iconName}
                title={tab.title}
              />
            ),
            headerShown: tab.headerShown,
            title: tab.title,
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTitleStyle: {
              color: colors.primary600,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
