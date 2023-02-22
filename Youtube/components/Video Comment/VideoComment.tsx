import { Text, View, StyleSheet, Image } from "react-native";

interface VideoCommentProps {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    user: {
      name: string;
      image: string;
    };
    likes: number;
    dislikes: number;
    replies: number;
  };
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Image
        style={{ width: 34, height: 34, borderRadius: 17 }}
        source={{ uri: comment.user.image }}
      />
      <Text
        style={{
          color: "#fff",
          marginLeft: 10,
        }}
      >
        {comment.comment}
      </Text>
    </View>
  );
};

export { VideoComment };

const styles = StyleSheet.create({
  container: {},
});
