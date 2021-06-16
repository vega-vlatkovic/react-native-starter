import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import PostModel from "../models/PostModel";
import { AppRoute } from "../navigation/routes";

interface Props {
  post: PostModel;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate(AppRoute.POST, {
      post,
    });
  }, [navigation, post]);

  return (
    <Pressable onPress={handleNavigation}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  } as TextStyle,
  body: {
    fontSize: 14,
  } as TextStyle,
});

export default Post;
