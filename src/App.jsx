import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/HomeLayout";
import Movies from "./components/pages/Movies";
import MovieDetails from "./components/pages/MovieDetails";
import People from "./store/slices/people";
import CastDetail from "./components/pages/CastDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:castId" element={<CastDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
