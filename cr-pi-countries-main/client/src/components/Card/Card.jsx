const Card = ({ name, bandera, continente }) => {
  return (
    <div>
      <img src={bandera}></img>
      <h2>{name}</h2>
      <h3>{continente}</h3>
    </div>
  );
};

export default Card;
