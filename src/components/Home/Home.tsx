import React from "react";
import "../../styles/App.css";
import "./Home.css";
import "../Header/header.css";
import Header from "../Header/Header.tsx";
import MovieList from "../MovieList/MovieList";
import posterHome from "../../assets/background3.png";
import { useFilterSort } from "../FilterAndSort/FilterSortContext.tsx";

const Home: React.FC = () => {
  // Extraemos las propiedades del hook useFilterSort.
  const { filterByValue, setFilterByValue, sortByValue, setSortByValue } =
    useFilterSort();

  //Función para cambiar el estado, toma el selectedFilterValue y actualiza el filterByValue
  const onChangeFilterBy = (selectedFilterValue: string) => {
    setFilterByValue(selectedFilterValue);
  };
  //Función para cambiar el estado, toma el selectedSortValue y actualiza el sortByValue
  const onChangeSortBy = (selectedValue: string) => {
    setSortByValue(selectedValue);
  };

  return (
    <>
      <section>
        <Header
          onChangeFilterBy={onChangeFilterBy}
          onChangeSortBy={onChangeSortBy}
        />
      </section>

      <section className="poster-container">
        <img src={posterHome} className="posterHome" alt="poster" />
      </section>

      <section>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue} />
      </section>
    </>
  );
};

export default Home;
