import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { theme } from "../theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

const ShoppingListItem = (props: Props) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${props.name}?`,
      "It will be gone forever",
      [
        {
          text: "Yes",
          onPress: () => props.onDelete(),
          style: "destructive",
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <Pressable
      style={[
        styles.itemContainer,
        props.isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={props.onToggleComplete}>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name={props.isCompleted ? "check-bold" : "circle-outline"}
          size={24}
          color={props.isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            props.isCompleted ? styles.completedText : undefined,
          ]}>
          {props.name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
          color={props.isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ShoppingListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
  },
  completedText: {
    textDecorationColor: theme.colorGrey,
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
  },
});
