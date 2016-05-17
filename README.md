# Unix-Timestamp Transform For Instagram

[![Build Status](https://travis-ci.org/neighborhood999/unix-timestamp-transform.svg?branch=master)](https://travis-ci.org/neighborhood999/unix-timestamp-transform)
[![Coverage Status](https://coveralls.io/repos/github/neighborhood999/unix-timestamp-transform/badge.svg?branch=master)](https://coveralls.io/github/neighborhood999/unix-timestamp-transform?branch=master)

This is just for tranform instagram timestamp use.

### Usage

```js
const transform = require('unix-timestamp-transform');
const fakeUnixTimestamp = 1420070400 // 2015.1.1

const date = transform.transformUnixTime(fakeUnixTimestamp).toDateString(); // Fri Jan 01 2016

// You can use related Date.prototype Methods Getter
console.log(date.getDate()); // 1

transform.fromNow(fakeUnixTimestamp) // 137 (days)

transform.daysBetween(20) // 20 days ago
```

### Lint

```sh
npm run lint
```

### Test

```sh
npm test
```

### Related
[react-redux-instagram](https://github.com/neighborhood999/react-redux-instagram)

### LICENSE

MIT
