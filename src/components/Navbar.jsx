import PropTypes from "prop-types";

export default function Navbar({ setPokemonIndex, poke }) {
  const handleClick = (name) => {
    name === "pikachu" ? alert("Pikachu ! Pikachu !!") : null;
  };

  return (
    <div>
      {poke.map((poke) => (
        <button
          key={poke.name}
          onClick={() => {
            handleClick(poke.name);
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
  poke: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    map: PropTypes.array,
  }),
  navigation: PropTypes.array,
};
