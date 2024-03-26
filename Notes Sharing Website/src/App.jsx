import "./App.css";
import Navbar from "./components/navbar/index";
import LoadData from "./components/landingPage/load-data";
import Footer from "./components/footer/footer";
import UploadSection from "./components/uploadSection/upload";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Upload from "./components/pages/upload";
import Error from "./components/pages/errorPage/error";
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;