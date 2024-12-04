import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import { Navbar } from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import pages from "./data/pages.js";
import navigation from "./data/navigation.js";
import { Page } from "./components/Page.jsx";
import Homepage from './components/Homepage.jsx';

const App = () => {
  return (
    <Router basename="/audiolibro/">
      <div className="flex min-h-screen">
        <Navbar navigation={navigation} />
        <main className="flex-grow bg-white">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:pageId" element={<Page pages={pages} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;