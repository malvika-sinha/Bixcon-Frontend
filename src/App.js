import React from 'react';  
import Testimonials from './components/Testimonials';  
import Experts from './components/Experts';  

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faBloggerB,
} from "@fortawesome/free-brands-svg-icons";
import Headline from "./components/headline";
import SocialIcons from "./components/socialicons";
import Button from "./components/button";
import Services from "./components/services";

import './index.css';

function App() {  
  return (  
    <div className="App">  
  <div className="relative h-screen overflow-x-hidden">
      {/* Main content */}
      <div className="z-0">
        <section>
          <Headline />
        </section>
        <section>
          <Services />
        </section>
        {/* Add other sections here */}
      </div>

      {/* Overlay Left sidebar */}
      <div className="bg-[rgba(255,0,121,0.35)] hover:bg-[rgba(255,0,121,0.5)] flex py-10 flex-col justify-between fixed top-0 left-0 h-full w-20 bg-opacity-50 backdrop-blur-sm z-50 border-r-2 border-black">
        <FontAwesomeIcon icon={faBloggerB} className="text-black-500 text-5xl" />
        {/* Social Icons */}
        <div className="flex flex-col justify-center gap-4">
          <SocialIcons link="https://x.com/">
            <FontAwesomeIcon icon={faXTwitter} />
          </SocialIcons>
          <SocialIcons link="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialIcons>
          <SocialIcons link="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcons>
        </div>
      </div>

      {/* Overlay Right Sidebar */}
      <div className="absoulute flex flex-col justify-between fixed top-10 right-20 h-full w-fit border-4 border-black h-[9%] rounded-[35px] bg-transparent bg-opacity-50 z-50"  id="right_overlay">
        <Button
          text="START A PROJECT"
          textColor="text-black"
          bgColor="bg-white"
          hoverColor="hover:bg-[#db1f78]"
          borderColor="border-transparent"
         />
      </div>
    </div>

      <Testimonials />  
      <Experts />  
    </div>  
  );  
}  

export default App;

