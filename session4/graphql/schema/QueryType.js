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
    },
  }),
});

module.exports = QueryType;
