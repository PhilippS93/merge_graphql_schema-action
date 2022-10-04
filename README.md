# Merge GraphQL Schema Action

This action merges all graphql files fo a specific path using `@graphql-tools/merge` and outputs the merged string.

## Inputs

## `path`

**Required** Glob pattern or patterns to use when loading GraphQl files. Default `"./**/*.graphqls"`.

## Outputs

## `fileContent`

String of merged GraphQL files.

## Example usage

    uses: PhilippS93/merge_graphql_schema-action@v1.7
        with:
            path: './**/*.graphqls'
