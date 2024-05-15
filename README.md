## Config

To run the code, update `constants/InstantEditor.ts`:

- iosLicenseKey: Set a license/trial key. to work with the app.
- serverUrl: the document-engine server url. Ours runs on port 5500, if you run one it'll probably be on a different port.
- token: A token that works with the document engine. Ours has the following config:
  ```json
  {
    "user_id": "user-1609",
    "document_id": "252-3594",
    "permissions": ["read-document", "write"],
    "collaboration_permissions": [],
    "iat": 1715700723,
    "exp": 1715787123
  }
  ```

## Run the app

### Requirements

#### Tools

- Working react native dev setup (xcode with ios emulator, cocoapods, ...)
- Node 20
- npm

### run command

run the app with `npx expo run ios`

## Issues

The PSPDFKit instant editor does not respect any config parameters passed to it.
In the example as-is, the scroll direction is set as "vertical", but scrolling still happens horizontally.

Additionally it's a bit strange that no `console.log` statements after in the `then` and `catch` blocks after the `presentInstant` call are being executes. Almost as if the promise hangs indefinitely.
