import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import VideoScreenWithRecommendation from "./screens/Video Screen/VideoScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={"dark"} /> */}
        <VideoScreenWithRecommendation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
