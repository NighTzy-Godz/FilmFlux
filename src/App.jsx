import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/HomeLayout";
import Movies from "./components/pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
