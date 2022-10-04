const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { print } = require('graphql')
const fs = require('fs')

async function run() {
    const loadedFiles = loadFilesSync(`C:/Users/Staud/IdeaProjects/auth-service/src/main/resources/graphql/public/**/*.graphqls`)
    const typeDefs = mergeTypeDefs(loadedFiles)
    const printedTypeDefs = print(typeDefs)
    fs.writeFileSync('joined.graphql', printedTypeDefs)
}

run();
