import "./App.css";
import Navbar from "./components/navbar/index";
import LoadData from "./components/landingPage/load-data";
import Footer from "./components/footer/footer";
import UploadSection from "./components/uploadSection/upload";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Upload from "./components/pages/upload";
import Error from "./components/pages/errorPage/error";
import NotesPage from "./components/notesPage/mainPage";
import FolderPage from "./components/folderPage/folderPage";
import LoginPage from "./components/loginPage/login";
import SignUp from "./components/loginPage/signup";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/notes/:id" element={<NotesPage />} />
                    <Route path="/folder/:id" element={<FolderPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
