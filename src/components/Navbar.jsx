import PropTypes from "prop-types";

export default function Navbar({ navigation, poke }) {
  const [pokemonIndex, setPokemonIndex] = navigation;

  return (
    <div>
      {poke.map((poke) => (
        <button
          key={poke.name}
          onClick={() => {
            setPokemonIndex(poke.id - 1);
          }}
        >
          {poke.name}
        </button>
      ))}
    </div>
  );
}

Navbar.propTypes = {
  poke: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    map: PropTypes.array,
  }),
  navigation: PropTypes.element,
};
