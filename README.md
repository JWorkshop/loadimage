# loadimage

Load image(s) asynchronously.
Returns `null` if image fails to load.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/@jworkshop/loadimage.svg
[npm-url]: http://npmjs.org/package/@jworkshop/loadimage
[travis-image]: https://img.shields.io/travis/JWorkshop/loadimage.svg
[travis-url]: https://travis-ci.org/JWorkshop/loadimage
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/@jworkshop/loadimage.svg
[download-url]: https://npmjs.org/package/@jworkshop/loadimage

## install

[![NPM](https://nodei.co/npm/@jworkshop/loadimage.png)](https://nodei.co/npm/@jworkshop/loadimage)

## Usage

```javascript
import loadImage from "@jworkshop/loadImage";

let yourImage = loadImage("<your image URL>");

let imageURLs = [ ... ];

let yourImages = loadImage(imageURLs);
```
