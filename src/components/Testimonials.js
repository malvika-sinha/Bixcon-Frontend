import React from 'react';
import './Testimonial.css';


const Testimonials = () => {
  return (

    <div>

      <div className='bg-transparent w-[98px] h-[805px] top-[-17px] relative'>
        <div>
        {/* <img src="https://i.postimg.cc/yNXYq8MB/Screenshot-2024-09-15-170823.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" id='logo' alt=""/> */}
        </div>
        <div className='social'>
          {/* <img src="https://i.postimg.cc/hGH1XgMX/instagram.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" id='social_image' alt=""/>
          <img src="https://i.postimg.cc/qqcPm1gG/icons8-linkedin-50.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"  id='social_image'alt=""/>
          <img src="https://i.postimg.cc/rmxCWbYQ/twitter-1.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle, rounded-sm|}" id='social_image_twitter' alt=""/> */}

        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#f5ebeb] p-10" id='Section1'>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">WHAT CLIENT SAYS</h2>
          <div className="flex items-center mb-4">
            <span className="relative left-[67%] top-[-305px] text-[#db1f78] text-[40px]" id='open_quote'>“</span>
            <p className="text-lg italic mx-4 fadeInAfterDelay" id='the_Test'>
            Archin - an architecture studio with passionate, professional and full creativity. The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget. More than what I'm expected. Perfect!
            </p>

          
            <span className="relative left-[57%] top-[-90px] text-[#db1f78] text-[40px]">”</span>
            <div > 
              <img src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg" class="w-[61px] h-[56px] rounded-[54px] relative left-[-126px] top-[-13px]" alt=""/>
            </div>
          </div>
          <div className='names_test'>
          <p className="font-semibold">Szoboslai D.</p>
          <p className="text-gray-500">Director at Dallas Ecolodge Jsc</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0" id='start_proj'>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300" id='button_start'>
            START A PROJECT
          </button>
          <div className="mt-10">
            <h3 className="text-5xl font-bold text-[78px] mt-[85px] text-primary">95%</h3>
            <p className="text-gray-500">CLIENTS SATISFIED AND REPEATING</p>
          </div>
          <div className="mt-4 text-[#db1f78]">
            <h3 className="text-5xl font-bold">265+</h3>
            <p className="text-gray-500">PROJECTS DONE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;