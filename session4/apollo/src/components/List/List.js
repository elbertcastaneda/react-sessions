import React, { Component } from "react";
import Pokemon from "../Pokemon";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Container } from "./List.styled";

class PokemonList extends Component {
  render() {
    console.log(this.props);
    const {pokemonQuery, onSelect } = this.props;

    if (!pokemonQuery) {
      return null;
    }
    
    if (pokemonQuery.loading) {
      return <div>Loading ...</div>;
    }

    const { pokemons } = pokemonQuery;
    return <Container>
      { pokemons.map(pokemon => 
          <Pokemon key={pokemon.id} 
            id={pokemon.id} 
            image={pokemon.image} 
            number={pokemon.number}
            name={pokemon.name} />)}
    </Container>;
  }
}

const POKEMON_QUERY = gql`
  query GetPokemon {
    pokemons(first: 151) {
      id
      name
      number
      image
    }
  }
`;

export default graphql(POKEMON_QUERY, { name: 'pokemonQuery'})(PokemonList);
