import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  midleContainer: {
    margin: 10,
  },
  tags: {
    color: "#0094e3",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500",
  },
  actionListContainer: {
    marginVertical: 10,
  },
  actionListItem: {
    width: 70,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
  },
  userInfocontainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#3d3d3d",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
