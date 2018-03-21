const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const WeightType = require('./WeightType');

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'Pocket monster',
  fields: () => ({
<<<<<<< HEAD
    name: { type: GraphQLString },
    weight: { type: WeightType }
=======
    name: {
      type: GraphQLString,
      description: 'the name of the pokemon'
    },
    weight: {
      type: GraphQLString,
      description: 'the weight of the pokemon',
      resolve: (pokemon, args) =>
        pokemon.weight.maximum,
    },
>>>>>>> ee36b3eca92c07e4da44b78c47e9e0a0d52e91a9
  })
});

module.exports = PokemonType;
