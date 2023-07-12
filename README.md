# uniquify.js

Lightweight package to parse and remove duplicate elements of a standard JavaScript array.

## Installation

```js
// Using NPM
npm install uni.js

// Using Yarn
yarn add uni.js
```

## Usage

```js
// Using Require
const { uniquify } = require('uni.js');

// Using Import
import { uniquify } from 'uni.js';
```

## Example
```js
let myNums = [1, 2, 3, 1, 4, 1, 2, 5, 3, 4];
let uniqueNums = uniquify(myNums);
console.log(uniqueNums); // -> [1, 2, 3, 4, 5]
```
