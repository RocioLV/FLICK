import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';
import { FilterSortProvider } from './components/FilterAndSort/FilterSortContext'; // Importa el contexto

const App: React.FC = () => {
  return (
    <section className="App">
      <FilterSortProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/movie/:movieId' element={<MoviePage />} />
          </Routes>
        </Router>
      </FilterSortProvider>
    </section>
  );
}

export default App;