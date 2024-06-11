function PokemonCard ({pokemon}) {
    
    return(
        <figure>
            {pokemon.imgSrc != undefined ? <img src= {pokemon.imgSrc} alt="image Pokemon Bulbasaur" /> : <p>????</p> }
            <figcaption>{pokemon.name} </figcaption>
        </figure>
    );
}


export default PokemonCard