import PropTypes from "prop-types";

export default function PokemonCard ({pokemon}) {
    
    return(
        <figure>
            {pokemon.imgSrc != undefined ? <img src= {pokemon.imgSrc} alt={`Pokemon ${pokemon.name}`} /> : <p>????</p> }
            <figcaption>{pokemon.name} </figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    }).isRequired,
}