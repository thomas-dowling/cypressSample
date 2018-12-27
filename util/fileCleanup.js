'use strict';

var del = require('node-delete');


del(['reports/**', '!reports'], function(err, paths) {
	console.log('Deleted files/folders:\n', paths.join('\n'));
});