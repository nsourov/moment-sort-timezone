Sort `moment-timezone` timezone list by GMT.
### Install

```bash
yarn add nsourov/moment-sort-timezone
or
npm install --save nsourov/moment-sort-timezone
```

### Usage

```js
const sortByGmt = require('nsourov/moment-sort-timezone');
const sortedTimeZone = sortByGmt();
// sortByGmt will return the sorted timezone.
// It will sort by GMT negative upper to lower from positive upper to lower
```
