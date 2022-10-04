const core = require('@actions/core');

const {loadFilesSync} = require('@graphql-tools/load-files')
const {mergeTypeDefs} = require('@graphql-tools/merge')
const {print} = require('graphql')

try {
    const nameToGreet = core.getInput('path');
    const loadedFiles = loadFilesSync(nameToGreet)
    const typeDefs = mergeTypeDefs(loadedFiles)
    const printedTypeDefs = print(typeDefs)
    core.setOutput("fileContent", printedTypeDefs);
} catch (error) {
    core.setFailed(error.message);
}
