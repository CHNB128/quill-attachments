# Quill attachments

Attachments plugin for Quill rich text editor

![gif](https://github.com/CHNB128/quill-attachments/blob/master/screenshots/Peek_2021-09-25_17-36.gif)

# Usage

Import module and register it.

```js
import AttachmentsModule from './dist/module.js'

Quill.register("modules/attachments", AttachmentsModule)
```

Then provide configuration for module.

```js
new Quill('#editor', {
  modules: {
    attachments: {
      render: (node, { file }) => {
        node.textContent = file.name
        return node
      },
      onFileUploaded: (node, { url }) => {
        // Allow page to be closed
        window.onbeforeunload = () => {};
      },
      upload: file => {
        // Prevent page to be closed while file in uploading
        window.onbeforeunload = () => {
          return "You have attempted to leave this page. Are you sure?";
        }
        // return a Promise that resolves in a link to the uploaded image
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MOCK_IMG_SRC); // Must resolve as a link to the image
          }, 1000);
          // const fd = new FormData();
          // fd.append("upload_file", file);

          // const xhr = new XMLHttpRequest();
          // xhr.open("POST", `${window.location.pathname}/api/files/add`, true);
          // xhr.onload = () => {
          //   if (xhr.status === 200) {
          //     const response = JSON.parse(xhr.responseText);
          //     resolve(response.file_path); // Must resolve as a link to the image
          //   }
          // };
          // xhr.send(fd);
        });
      }
    },
  },
});
```

Have fun!

# Development

```
yarn watch
yarn demo
```

## Build for production

```
yarn build
```

## Commiting

```
yarn commit
```
