import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/HomeLayout";
import Movies from "./components/pages/Movies";
import MovieDetails from "./components/pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
