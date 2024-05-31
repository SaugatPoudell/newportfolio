
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';

function App() {
  return (
    <>
<div className='top-0 -z-0 h-full w-full'>
    <div className="relative inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <Navbar/>
      <Hero/>
      <About/>
      <Tech />



   
      <Footer/>

     
    </div>
    </div>
    </>
  );
}

export default App;
