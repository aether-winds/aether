const template = (strings, ...keys) => (dictionary) => keys.reduce((result, key, i) => [ ...result, dictionary[key], strings[i + 1] ], [strings[0]]).join('');

exports.Exception_InvalidType = template `Invalid type ${'type'}. Valid types are [ ${'types'} ].`;