const strings = require('./strings.cjs');

class InvalidTypeException extends Error {
    constructor(type, types) { super(strings.Exception_InvalidType({ type, types: types.join(', ') })); }
}
exports.InvalidTypeException = InvalidTypeException;