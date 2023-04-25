import { Platform } from "react-native";
import { WebApp } from "./web-version";
import { MobileApp } from "./mobile-version";

export const AppView = Platform.select({
    web: WebApp,
    android: MobileApp,
    ios: MobileApp
})