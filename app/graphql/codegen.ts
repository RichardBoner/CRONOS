import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.GQL_SCHEMA_ENDPOINT,
  documents: ['./app/graphql/documents/query.graphql'],
  generates: {
    './app/graphql/generated/index.ts': {
      overwrite: true,
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
