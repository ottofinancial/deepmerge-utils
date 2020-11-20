'use strict';

const deepmerge = require( 'deepmerge' );

module.exports = {
	array_merges: {
		merge_by_index: ( target, source, options ) => {
			const destination = target.slice();

			source.forEach( ( item, index ) => {
				if ( typeof destination[ index ] === 'undefined' ) {
					destination[ index ] = options.cloneUnlessOtherwiseSpecified( item, options );
				}
				else if ( options.isMergeableObject( item ) ) {
					destination[ index ] = deepmerge( target[ index ], item, options );
				}
				else if ( target.indexOf( item ) === -1 ) {
					destination.push( item );
				}
			} );
			return destination;
		}
	}
};