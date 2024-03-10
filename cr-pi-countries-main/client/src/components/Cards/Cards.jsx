import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Cards = ({ allCountries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCountries.slice(indexOfFirstCard, indexOfLastCard);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (indexOfLastCard < allCountries.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <>
      {currentCards.map((pais) => (
        <Link to={`/detail/${pais.id}`} key={pais.id}>
          <Card
            key={pais.id}
            name={pais.name}
            continente={pais.continente}
            bandera={pais.bandera}
          />
        </Link>
      ))}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastCard >= allCountries.length}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Cards;
