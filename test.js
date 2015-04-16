var ts = require('./')
	, test = require('tape')
	;

test('add tags, del tags, check and get', function (t) {
	tags = ts('thing,thing2');

	t.equal(tags.add('thing3'), 3, '.add(tag) returns new length on success');
	t.equal(tags.get(), 'thing,thing2,thing3', '.get() returns stringified tags');
	t.equal(tags.add('thing'), false, '.add(tag) returns false on already existing tag');
	t.equal(tags.del('thing'), 2, '.del(tag) returns new length on success');
	t.equal(tags.has('thing2'), true, '.has(tag) returns true on existing tag');
	t.equal(tags.has('nothing'), false, '.has(tag) returns false on non-existing tag');
	t.equal(tags.get(), 'thing2,thing3', '.get() returns stringified tags');
	t.equal(tags.del('not-there'), false, '.del(tag) returns false on non-existing tag');
	t.equal(tags.get('something'), null, '.get(tag) returns null on non-existing tag');
	t.equal(tags.get('thing2'), 'thing2', '.get(tag) returns tag on existing tag');
	t.equal(tags.del(), 0, '.del() returns 0 as new length after deleting all tags');
	t.equal(tags.get(), '', '.get() returns empty string when no tags');
	t.end();
});

