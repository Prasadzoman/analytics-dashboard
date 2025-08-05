import './App.css';
import BackgroundVideo from './pages/BackgroundVideo/BackgroundVideo';
import Overview from './pages/Overview/Overview';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
function App() {
  return (
    <>
      <BackgroundVideo />
      <Navbar/>
      <div className="main-content">
        <header className="hero-section">
          <h1>ADmyBRAND Insights</h1>
          <p>Welcome to the future of analytics</p>
        </header>
        <Overview />
      </div>
      <Footer/>
    </>
  );
}

export default App;
