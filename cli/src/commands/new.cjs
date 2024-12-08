const { confirm, input } = require('@inquirer/prompts');
const { InvalidTypeException } = require('../utils/exceptions.cjs');
const { validateOrThrow } = require('../utils/utils.cjs');

const validTypes = [ 'component' ];

exports.command = 'new <type>';
exports.aliases = 'n';
exports.describe = 'Creates a module of the specified type.';
exports.builder = {};

exports.handler = async ({ type }) => {
    validateOrThrow(validTypes.includes(type.toLowerCase()), InvalidTypeException, type, validTypes);

    switch(type) {
        case 'component':   await buildComponent();     break;
    }
};

async function buildComponent() {
    const componentName = await input({message: 'What is the component name?'});
    const version = await input({message: 'What is the component version?'});
    const publishable = await confirm({message: 'Do you want to publish your component?', default: false});
    const useNpmRepo = publishable ? await confirm({message: 'Do you want to specify a private repository?', default: false}) : false;
    const repository = publishable && useNpmRepo ? await input({message: 'What is url of your private repository?'}) : '';
    const description = await input({message: 'Describe your component:'});

    console.log(componentName, version, publishable, useNpmRepo, repository);
}