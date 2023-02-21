import { AntDesign } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import { VideoListItem } from "../../components/Video List Item/VideoListItem";
import { VideoPlayer } from "../../components/Video Player/VideoPlayer";
import styles from "./styles";

interface VideoScreenProps {}

const VideoScreen = (props: VideoScreenProps) => {
  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }

  return (
    <View style={styles.container}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
      <View style={styles.midleContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>
          {video.user.name} {viewsString}
          {video.createdAt}
        </Text>
      </View>
      <View style={styles.actionListContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.actionListItem}>
            <AntDesign name="like2" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.likes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="dislike2" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="export" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgray" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.userInfocontainer}>
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            {video.user.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 14 }}>
            {video.user.subscribers} subscribers
          </Text>
        </View>
        <Text
          style={{
            color: "darkred",
            fontSize: 18,
            fontWeight: "500",
            padding: 10,
          }}
        >
          SUBSCRIBE
        </Text>
      </View>
      <View style={{ padding: 10, marginVertical: 10 }}>
        <Text style={{ color: "#fff" }}>Comments 303</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image
            style={{ width: 34, height: 34, borderRadius: 17 }}
            source={{ uri: video.user.image }}
          />
          <Text
            style={{
              color: "#fff",
              marginLeft: 10,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est modi
            ipsum ipsa
          </Text>
        </View>
      </View>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
