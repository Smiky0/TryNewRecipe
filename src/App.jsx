import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavouritePage from "./pages/FavouritePage";
import Homepage from "./pages/Homepage";
import NoContent from "./pages/NoContent";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/favourites" element={<FavouritePage />} />
                <Route path="*" element={<NoContent />} />
            </Routes>
        </>
    );
}

export default App;
