import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import LipBalm from './components/LipBalm';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        } else if (currentPage === 'LipBalm') {
            return <LipBalm />;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        } else {
            return <Gallery />;
        }
    };

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
