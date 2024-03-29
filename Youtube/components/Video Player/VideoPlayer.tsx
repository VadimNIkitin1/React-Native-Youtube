import { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Video } from "expo-av";

interface VideoPlayerProps {
  videoURI: string;
  thumbnailURI: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;

  return (
    <View>
      <Video
        source={{ uri: videoURI }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        posterSource={{
          uri: thumbnailURI,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        useNativeControls
      />
    </View>
  );
};

export { VideoPlayer };

const styles = StyleSheet.create({
  container: {},
});
