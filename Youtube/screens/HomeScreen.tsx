import { View, FlatList } from "react-native";
import { VideoListItem } from "../components/Video List Item/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};

export { HomeScreen };
