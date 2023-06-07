import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";
import ResultsPage from "./pages/ResultsPage";

function App() {
  // const userInSession = null;
  const userInSession = { name: "Diego" };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<ProfilePage userInSession={userInSession} />} />
        <Route path="/search" element={<ResultsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
