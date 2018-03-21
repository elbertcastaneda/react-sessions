const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const WeightType = require('./WeightType');

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'Pocket monster',
  fields: () => ({
    name: { type: GraphQLString },
    weight: { type: WeightType }
  })
});

module.exports = PokemonType;
