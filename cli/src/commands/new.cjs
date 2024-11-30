const { input } = require('@inquirer/prompts');

exports.command = 'new <type>';
exports.aliases = 'n';
exports.describe = 'Creates a module of the specified type.';

exports.builder = {
};

exports.handler = async ({ type }) => {
    /* TODO: Determine what type of thing we're creating, then load the 
       appropriate prompts. */
    console.log(type);
};