import { Image, StyleSheet, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { presentInstantEditor } from "@/components/InstantEditor";
import { InstantEditor } from "@/constants/InstantEditor";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Button
        title="Open Instant Sync"
        onPress={() => {
          // Hard-Coded token for demonstration purposes
          const token = InstantEditor.token;
          presentInstantEditor(token);
        }}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
