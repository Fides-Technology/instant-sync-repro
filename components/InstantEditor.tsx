import { NativeModules } from "react-native";
import { InstantEditor } from "@/constants/InstantEditor";

const PSPDFKit = NativeModules.PSPDFKit;
PSPDFKit.setLicenseKey(InstantEditor.iosLicenseKey)
  .catch((error: unknown) => {
    console.error(error);
  })
  .then(() => {
    console.log("License set");
  });

export function presentInstantEditor(token: string) {
  const result = PSPDFKit.presentInstant(
    { jwt: token, serverUrl: InstantEditor.serverUrl },
    {
      // this config isn't respected.
      // It looks like nothing in this config object has any effect on the instant editor
      scrollDirection: "vertical",
      iOSSettingsOptions: ["scrollDirection"],
    }
  )
    .then((result: boolean) => {
      // None of these are ever logged
      console.log({ result }, "result");
    })
    .catch((e: unknown) => {
      // None of these are ever logged
      console.log("error");
      console.error(e);
    });
  // None of these are ever logged
  console.log("done");
}
