import { Text, View, StyleSheet } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { VideoComment } from "../Video Comment/VideoComment";
import comments from "../../assets/data/comments.json";

interface VideoCommentsProps {}

const VideoComments = (props: VideoCommentsProps) => {
  return (
    <View style={styles.container}>
      <BottomSheetFlatList
        data={comments}
        renderItem={({ item }) => <VideoComment comment={item} />}
      />
    </View>
  );
};

export { VideoComments };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
});
