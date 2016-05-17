# Unix-Timestamp Transform For Instagram

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
