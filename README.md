tag-string
----------

Parse and manage a string of tags

install
-------

```bash
npm install tag-string
```

usage
-----

```js
var ts = require('tag-string');
var t = ts('bulk,updated,ready,other-thing');

t.add('fixed');
t.del('bulk');

console.log(t.get());
//updated,ready,other-thing,fixed
```

api
---

### Constructor

require(tag-string)(string);

### .add(tag)

Adds a new tag to the collection of tags only if it does not already exist.

* tag - The tag to add.
* return - When the tag has been added the new count of tags in the collection
  is returned. When the tag is not added, `false` is returned.

### .del([tag])

Removes a tag from the collection of tags.

* tag - optional - The tag to be removed from collection
	* If tag is not provided all tags are removed
* return - When the tag has been removed the new count of tags in the collection
  is returend. When the tag is not removed, `false` is returned.

### .get([tag])

Get the string of tags

### .has(tag)

Check to see if a tag exists within the collection of tags

* tag - the tag to look up


license
-------

MIT
