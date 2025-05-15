import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <>
            <a className="floating-btn" href="">/\</a>

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
