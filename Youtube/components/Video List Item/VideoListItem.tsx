import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

interface VideoListItemProps {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
}

const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;
  const { thumbnail, duration, user, title, createdAt, views } = video;

  const navigation = useNavigation();

  const min = Math.floor(duration / 60);
  const sec = duration % 60;

  let viewsString = views.toString();
  if (views > 1_000_000) {
    viewsString = (views / 1_000_000).toFixed(1) + "m";
  } else if (views > 1_000) {
    viewsString = (views / 1_000).toFixed(1) + "k";
  }

  const openVideoScreen = () => {
    navigation.navigate("VideoScreen", { id: video.id });
  };

  return (
    <Pressable style={styles.videoCard} onPress={openVideoScreen}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: thumbnail,
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {min}:{sec < 10 ? "0" : ""}
            {sec}
          </Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.image,
          }}
        />
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {user.name} {viewsString}
            {createdAt}
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} color={"grey"} />
      </View>
    </Pressable>
  );
};

export { VideoListItem };
