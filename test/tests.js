'use strict';

const assert = require( 'assert' );
const deepmerge = require( 'deepmerge' );
const deepmerge_utils = require( '../index.js' );
const test = require( 'baretest' )( 'deepmerge-utils' );

test.quiet( false );
test.bail( false );

test( 'should support merging arrays by index', async () => {
	const first = [ {
		i: 1
	}, {
		i: 2
	}, {
		i: 3
	} ];

	const second = [ {
		j: 1
	}, {
		j: 2
	}, {
		j: 3
	}, {
		j: 4
	} ];

	const expected = [ {
		i: 1,
		j: 1
	}, {
		i: 2,
		j: 2
	}, {
		i: 3,
		j: 3
	}, {
		j: 4
	} ];

	assert.deepStrictEqual( deepmerge( first, second, {
		arrayMerge: deepmerge_utils.array_merges.merge_by_index
	} ), expected );
} );

( async function() {
	await test.run();
} )();