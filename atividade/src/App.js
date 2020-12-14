import './App.css';
import Submenu from './components/SubMenu/Submenu.js'
import Carousel from './components/Carousel/Carousel.js'
import { ImageData } from './components/Carousel/CarouselImg.js';

function App() {
 
  return (
    <div className="App">
      <header className="App-header"> 
      <span className="logo"/>   
        <Submenu teste={"teste"} />
      </header>
      <Carousel imgs={ImageData} id='teste' className='teste' />
    </div>
  );
}

export default App;

        
