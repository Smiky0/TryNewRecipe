import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavouritePage from "./pages/FavouritePage";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/favourites" element={<FavouritePage />} />
            </Routes>
        </>
    );
}

export default App;
