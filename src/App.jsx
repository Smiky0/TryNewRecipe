import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FavouritePage from "./pages/FavouritePage";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/favourites" element={<FavouritePage />} />
            </Routes>
        </>
    );
}

export default App;
