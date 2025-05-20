import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

function App() {
      // Function to scroll to the top
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevents the default behavior (anchor link)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };
    return (
        <>
            <a className="floating-btn" href="#" onClick={scrollToTop}>/\</a>

            {/* header start */}

            <Header />

            {/* header end */}
            <main>
                {/* banner start */}

                <Banner />

                {/* banner end */}

                <div className="custom-container">

                    {/* info Start */}

                    <Info />

                    {/* info end */}

                    {/*  featured cars start  */}

                    <Featured />

                    {/*  featured cars end */}

                    {/*  client start */}

                    <Client />

                    {/*  client end */}
                </div>
            </main>
            {/* footer start*/}

            <Footer />

            {/* footer end */}
        </>
    );
}

export default App;
