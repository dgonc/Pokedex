import PropTypes from "prop-types";

export default function PokemonCard ({imgSrc, name}) {
    
    return(
        <figure>
            {imgSrc != undefined ? <img src= {imgSrc} alt={`Pokemon ${name}`} /> : <p>????</p> }
            <figcaption>{name} </figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {    
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    }
