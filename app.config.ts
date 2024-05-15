import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "instant-sync",
  slug: "instant-sync",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    isTabletOnly: true,
    bundleIdentifier: "technology.fides.boards.dev",
    infoPlist: {
      UIViewControllerBasedStatusBarAppearance: true,
      NSMicrophoneUsageDescription:
        "This app does not require access to the microphone.",
    },
  },
  android: {
    package: "technology.fides.boards.dev",
  },
  platforms: ["ios"],
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "15.0",
        },
      },
    ],
  ],
});
