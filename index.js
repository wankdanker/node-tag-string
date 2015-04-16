var inherits = require('util').inherits;

module.exports = function (str) {
	return new TagString(str);
}

function TagString(tags) {
	var self = this;

	self.tags = Array.isArray(tags)
		? tags
		: (tags || '').split(/,/gi)
		;
}

TagString.prototype.add = function (tag) {
	var self = this;

	if (arguments.length === 0) {
		return false;
	}

	if (!~self.tags.indexOf(tag)) {
		self.tags.push(tag);

		return self.tags.length;
	}

	return false;
};

TagString.prototype.del = function (tag) {
	var self = this;

	if (arguments.length === 0) {
		self.tags = [];

		return 0;
	}

	var ix = self.tags.indexOf(tag);

	if (!~ix) {
		return false;
	}

	self.tags.splice(ix, 1);

	return self.tags.length;
};

TagString.prototype.get = function (tag) {
	var self = this;

	if (arguments.length === 0) {
		return self.toString();
	}

	return (~self.tags.indexOf(tag))
		? tag
		: null
		;
};

TagString.prototype.has = function (tag) {
	var self = this;

	return (~self.tags.indexOf(tag))
		? true
		: false
		;
};

TagString.prototype.toString = function () {
	var self = this;

	return self.tags.join(',');
};

