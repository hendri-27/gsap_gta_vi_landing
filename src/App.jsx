import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { GSDevTools } from "gsap/GSDevTools";

import Hero from './sections/hero';
import NavBar from './sections/NavBar';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      
      <FirstVideo />
      <Jason />

      <SecondVideo />
      {/* <hr className='fixed top-[5%] w-full h-1 bg-amber-300 z-50' /> */}
      <Lucia />
    </main>
  )
}

export default App