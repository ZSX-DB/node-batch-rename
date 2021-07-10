# node-batch-rename

**This library is for batch renaming of image files, Currently only Windows is supported, And only for Nodejs.**

**github:  [ZSX-DB/node-batch-rename (github.com)](https://github.com/ZSX-DB/node-batch-rename)**

```javascript
// Example
const batchRename = require('node-batch-rename')

// If you don't need to transfer the image file
batchRename({
    isTransfer: false,
    originPath: __dirname + '/images'
})

// Or you need to transfer image files
batchRename({
    isTransfer: true,
    originPath: __dirname + '/images',
    targetPath: 'D:\target'
})

// You can specify naming conventions, support function and strings, but this is not necessary
batchRename({
    isTransfer: false,
    originPath: __dirname + '/images',
    namingRule: ...
})
```

