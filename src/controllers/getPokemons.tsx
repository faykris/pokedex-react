import { Pokemon } from "../models/pokemon.m";

export const getPokemons = async (): Promise<Pokemon[]> => {
	const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

	const data = await response.json();
	const pokemons = data.results.map((pokemon:any) =>({
		name: pokemon.name,
		id: pokemon.national_number,
		imggif: fixUrl(pokemon.sprites['animated']),
		imgnormal: fixUrl(pokemon.sprites['normal']),
		imglarge: fixUrl(pokemon.sprites['large']),
		total: pokemon.total,
		hp: pokemon.hp,
		attack: pokemon.attack,
		defense: pokemon.defense,
		sp_atk: pokemon.sp_atk,
		sp_def: pokemon.sp_def,
		speed: pokemon.speed,
		type: pokemon.type[0],
	}));

	const distinctPokemons = pokemons.filter(
		(pokemon: any, index: number) =>
		pokemons.findIndex((other: any) => other.id === pokemon.id) === index
	);

	return distinctPokemons;
};

export const fixUrl = (url: string) => {

	if (url.includes("farfetch'd")) {
		return url.replace("farfetch'd", "farfetchd");
	} else if (url.includes("mr.-mime")) {
		return url.replace("mr.-mime", "mr-mime");
	} else if (url.includes("nidoran♂")) {
		return url.replace("nidoran♂", "nidoran-m");
	} else if (url.includes("nidoran♀")) {
		return url.replace("nidoran♀", "nidoran-f");
	} else {
		return url;
	}
}