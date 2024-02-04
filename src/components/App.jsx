import { Route, Routes } from 'react-router-dom';
import AppBar from './appBar/AppBar';
import CarCatalog from './pages/Catalog/CarCatalog';
import FavoriteCar from './pages/Favorite/FavoriteCar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CarCatalog />} />
          <Route path="/favorites" element={<FavoriteCar />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
