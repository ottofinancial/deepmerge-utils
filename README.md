# deepmerge-utils

## array_merges

### merge_by_index

Merges two arrays, merging merge-able objects at the same index, eg:

```javascript
const a = [ { a: 1 }, { a: 2 }, { a: 3 } ];
const b = [ { b: 1 }, { b: 2 }, { b: 3 }, { b: 4 } ];

deepmerge( a, b, {
	arrayMerge: deepmerge_utils.array_merges.merge_by_index
} );
// [ { a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { b: 4 } ]
```