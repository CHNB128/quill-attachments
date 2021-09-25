# Quill attachments

Attachments plugin for Quill rich text editor

[](/screenshots/Peek_2021-09-25_17-36.gif)

# Usage

```
new Quill('#editor', {
  modules: {
    attachments: {
      render: (node, { file }) => {
        // Make what ever you need with doom node
        // add clases or add inner nodes
        node.textContent = file.name
        return node
      },
      upload: file => {
        // return a Promise that resolves in a link to the uploaded image
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("mocky url"); // Must resolve as a link to the image
          }, 1000);
          // const fd = new FormData();
          // fd.append("upload_file", file);

          // const xhr = new XMLHttpRequest();
          // xhr.open("POST", `/api/files/add`, true);
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

# Development

```
yarn watch
yarn serve
```

## Commiting

```
yarn commit
```
