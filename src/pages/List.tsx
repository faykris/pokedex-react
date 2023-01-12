import React, {useEffect, useState} from 'react';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Pokemon } from '../models/pokemon.m';
import { getPokemons } from '../controllers/getPokemons';


const List = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const retrieveAll = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    }

    retrieveAll();
  });

  const filterPokemon = pokemons.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <h1>Pokémon Faykris</h1>
      <header>
        <input
          value={query}
          placeholder="Search Pokémon"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
          name="searchPokemon"
          id="searchPokemon"
        />
      </header>
      <div className='content-wrapper'>
        <div className='content'>
          <div className='row gap-3'>

            {filterPokemon?.slice(0, 151).map((pokemon) => (
              <Card className='mx-auto' style={{ width: '18rem' }}>
              <Card.Header><b>Type:</b> {pokemon.type}</Card.Header>
              <Card.Img width='80' height='100' variant="top" src={pokemon.imggif} className='d-block mx-auto w-50' />
              <Card.Body>
                <Card.Title className='text-center'>{pokemon.id} - {pokemon.name}</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                  <Figure.Image
                    width={16}
                    height={16}
                    alt="hp"
                    src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                   /><b> HP:</b> {pokemon.hp}
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <Figure.Image
                    width={16}
                    height={16}
                    alt="hp"
                    src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png"
                   /><b> Attack:</b> {pokemon.attack}</ListGroup.Item>
                  <ListGroup.Item>
                  <Figure.Image
                    width={16}
                    height={16}
                    alt="hp"
                    src="https://cdn-icons-png.flaticon.com/512/929/929429.png"
                   /><b> Defense:</b> {pokemon.defense}</ListGroup.Item>
                  <ListGroup.Item>
                  <Figure.Image
                    width={16}
                    height={16}
                    alt="hp"
                    src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                   /><b> Sp Atk:</b> {pokemon.sp_atk}</ListGroup.Item>
                  <ListGroup.Item>
                    <Figure.Image
                      width={16}
                      height={16}
                      alt="hp"
                      src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                    /><b> Sp Def:</b> {pokemon.sp_def}
                   </ListGroup.Item>
                  <ListGroup.Item>
                    <Figure.Image
                      width={16}
                      height={16}
                      alt="hp"
                      src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                    /><b> Speed:</b> {pokemon.speed}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
