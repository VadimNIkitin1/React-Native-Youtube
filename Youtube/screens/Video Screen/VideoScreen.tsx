import { useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import comments from "../../assets/data/comments.json";
import { VideoListItem } from "../../components/Video List Item/VideoListItem";
import { VideoPlayer } from "../../components/Video Player/VideoPlayer";
import styles from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { VideoComments } from "../../components/Video Comments/VideoComments";
import { VideoComment } from "../../components/Video Comment/VideoComment";

interface VideoScreenProps {}

const VideoScreen = (props: VideoScreenProps) => {
  const commentsSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }

  const openComments = () => {
    commentsSheetRef.current?.present();
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
        <View style={{ flex: 1 }}>
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
          {/* Comment */}
          <Pressable
            onPress={openComments}
            style={{ padding: 10, marginVertical: 10 }}
          >
            <Text style={{ color: "#fff" }}>Comments 303</Text>
            {comments.length > 0 && <VideoComment comment={comments[0]} />}
          </Pressable>
          {/* All comments */}
          <BottomSheetModal
            ref={commentsSheetRef}
            snapPoints={["70%"]}
            enablePanDownToClose
            backgroundComponent={({ style }) => (
              <View style={[style, { backgroundColor: "#4d4d4d" }]} />
            )}
          >
            <VideoComments />
          </BottomSheetModal>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
