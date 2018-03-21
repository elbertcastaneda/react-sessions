const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = require('graphql');

const PokemonType = require('./PokemonType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Main query object',
  fields: () => ({
    pokemons: {
      type: GraphQLList(PokemonType),
<<<<<<< HEAD
      resolve: (root, args, context) => context.apiClient.getPokemonList(),
    },
    pokemon: {
      type: PokemonType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (root, args, context) => {
        return context.apiClient.getPokemonList().find((pokemon) => {
          return pokemon.name === args.name;
        });
      },
=======
      resolve: (root, args, { apiClient }) =>
        apiClient.getPokemonList(),
>>>>>>> ee36b3eca92c07e4da44b78c47e9e0a0d52e91a9
    },
  }),
});

module.exports = QueryType;
