# Cross FormData [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/cross-formdata/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/cross-formdata)

Cross-platform FormData support.

[![NPM Badge](https://nodei.co/npm/cross-formdata.png)](https://npmjs.com/package/cross-formdata)

## Install

```sh
npm install cross-formdata
```

## Usage

```js
const FormData = require("cross-formdata");

new FormData()
//=> FormData { append: [Function], set: [Function], has: [Function], ... }

// Global patch (to support external modules).
globalThis.FormData = FormData;
```

## API

### FormData extends [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
