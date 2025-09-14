import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { GSDevTools } from "gsap/GSDevTools";

import Hero from './sections/hero';
import NavBar from './sections/NavBar';
import FirstVideo from './sections/FirstVideo';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  )
}

export default App