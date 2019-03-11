# referential-json-stringify

Provides `stringify`/`parse` functions for converting objects with shared/circular references to/from JSON

## How to Use

### Browser

1. Download [./dist/referential-json-stringify.min.js](referential-json-stringify.min.js) and add it to your project's files
1. Add `<script src='referential-json-stringify.min.js'></script>` to your page's `<head>`
1. call `referentialJsonStringify.stringify` and `referentialJsonStringify.parse` as needed

### Node

1. `npm install referential-json-stringify`
1. `import { stringify, parse } from 'referential-json-stringify';`
1. call as needed

## Example

```js
import { stringify } from 'referential-json-stringify';

const a = {
  name: 'a',
};
a.a = a;
const b = {
  name: 'b',
  a,
};
const root = {
  name: 'root',
  a,
  b,
};

stringify(root);
// [
// 	"root",
// 	{
// 		"name":2,
// 		"a":1
// 	},
// 	"a",
// 	{
// 		"name":4,
// 		"a":1
// 	},
// 	"b",
// 	{
// 		"name":0,
// 		"a":1,
// 		"b":3
// 	}
// ]
```
