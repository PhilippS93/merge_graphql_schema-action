# Merge GraphQL Schema Action

This action merges all graphql files fo a specific path using `@graphql-tools/merge` and outputs the merged string.

## Inputs

- `path` - The graphql schema path. Can use Glob pattern matching

**Required** Glob pattern or patterns to use when loading GraphQl files. Default `"./**/*.graphqls"`.

## Outputs

- `fileContent` - The merged file content string

String of merged GraphQL files.

## Example usage
```yaml
  uses: PhilippS93/merge_graphql_schema-action@v1.7
    id: mergeSchema
    with:
        path: './**/*.graphqls'
```

## Example workflow to push schema with rover to Apollo Studio
```yaml
  publishApollo:
    runs-on: ubuntu-latest
    container: node:12
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: PhilippS93/merge_graphql_schema-action@v1.7
        id: mergeSchema
        with:
          path: './graphql/**/*.graphqls'
      - name: Install Rover
        run: |
          curl -sSL 'https://rover.apollo.dev/nix/v0.1.0' | sh

          # Add Rover to the $GITHUB_PATH so it can be used in another step
          # https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#adding-a-system-path
          echo "$HOME/.rover/bin" >> $GITHUB_PATH
      - name: Push Apollo schema
        run: printf '%s\n' '${{ steps.mergeSchema.outputs.fileContent }}' | rover graph publish ${APOLLO_STUDIO_GRAPH_NAME}@${{ github.ref_name }} --schema -
        env:
          APOLLO_STUDIO_GRAPH_NAME: ${{ secrets.APOLLO_STUDIO_GRAPH_NAME }}
          APOLLO_KEY: ${{ secrets.APOLLO_STUDIO_API_KEY }}
```
