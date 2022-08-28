import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer"
import About from "./pages/About"
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>
          <div className="m-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
