import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";

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
    <div className={style.flex}>
      {currentCards.map((pais) => (
        <Link className={style.card} to={`/detail/${pais.id}`} key={pais.id}>
          <Card
            key={pais.id}
            name={pais.name}
            continente={pais.continente}
            bandera={pais.bandera}
          />
        </Link>
      ))}
      </div>
      <div className={style.flex}>
        <button className={style.botonpaginado} onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span className={style.indice}>{currentPage}</span>
        <button
        className={style.botonpaginado}
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
