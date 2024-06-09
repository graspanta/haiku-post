module.exports = {
  schema: {
    [import.meta.env.VITE_GRAPHQL_END_POINT_ORIGIN]: {
      headers: {
        'x-hasura-admin-secret': import.meta.env.VITE_HASURA_SECRET_KEY,
      },
    },
  },
  documents: ['src/graphql/query/**/*.graphql', 'src/graphql/mutation/**/*.graphql'],
  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};
