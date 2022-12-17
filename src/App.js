import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SearchItem from './Components/SearchItem/SearchItem';
import banner from './assets/banner/Vaccine development-pana.png'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='w-4/5 mx-auto'>
      <Navbar></Navbar>
      <img src={banner} alt="bannerImage" className='w-full mx-auto lg:h-[550px] h-52 my-2' />
      <section className='border rounded-xl'>
        <SearchItem></SearchItem>
      </section>
      <hr />
      <section className='lg:mt-10 mt-5'>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
