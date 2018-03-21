const {
  GraphQLObjectType,
  GraphQLFloat,
} = require('graphql');

const WeightType = new GraphQLObjectType({
  name: 'Weigth',
  description: 'Weigth of Pocket monster',
  fields: () => ({
    minimum: { type: GraphQLFloat,
      resolve: (p) => parseFloat(p.minimum)
    },
    maximum: { 
      type: GraphQLFloat,
      resolve: (p) => parseFloat(p.maximum)
    },
  })
});

module.exports = WeightType;
