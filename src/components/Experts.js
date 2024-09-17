// src/Experts.js  
import React from 'react';
import './Experts.css';

const experts = [
    { id: 1, name: 'Expert 1', img: 'path/to/image1.jpg' },
    { id: 2, name: 'Expert 2', img: 'path/to/image2.jpg' },
    { id: 3, name: 'Expert 3', img: 'path/to/image3.jpg' },
    { id: 4, name: 'Expert 4', img: 'path/to/image4.jpg' },
    { id: 5, name: 'Expert 5', img: 'path/to/image5.jpg' },
];

const Experts = () => {
    return (
        <div>

            <div className='bg-transparent w-[98px] h-[893px] top-[-805px] relative'>
                <div>
                    {/* <img src="https://i.postimg.cc/yNXYq8MB/Screenshot-2024-09-15-170823.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" id='logo' alt="" /> */}
                </div>
                {/* <div className='social'>
                    <img src="https://i.postimg.cc/hGH1XgMX/instagram.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" id='social_image' alt="" />
                    <img src="https://i.postimg.cc/qqcPm1gG/icons8-linkedin-50.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" id='social_image' alt="" />
                    <img src="https://i.postimg.cc/rmxCWbYQ/twitter-1.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle, rounded-sm|}" id='social_image_twitter' alt="" />

                </div> */}
            </div>
            <div className="bg-[#000000] text-white py-20 relative top-[-1646px] w-[101%] h-[893px] left-[0%]">


                <h2 className="text-center text-3xl font-bold fade-in relatives" id='experts'>Our Experts</h2>
                <div className="relative
    left-[-10%] top-[-59px]">
                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[151px] top-[-10px] left-[23%] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[75px] h-[142px] animate-pulse"
                        alt=""
                    />

                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[151px] top-[63px] left-[25%] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[75px] h-[142px] animate-pulse"
                        alt=""
                    />

                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[19%] top-[-281px] left-[40%] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[163px] h-[268px] animate-pulse"
                        alt="Animated"
                    />

                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[10%] top-[-700px] left-[954px] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[75px] h-[142px] animate-pulse"
                        alt=""
                    />

                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[14%] top-[-626px] left-[65%] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[78%] h-[205px] animate-pulse"
                        alt=""
                    />

                    <img
                        src="https://i.postimg.cc/zBkMK0vZ/35af6a41332353-57a1ce913e889.jpg"
                        class="relative w-[12%] top-[-1019px] left-[81%] mb-[21px] shadow-[0_4px_10px_rgba(255,255,255,0.6)] rounded-[78%] h-[173px] animate-pulse"
                        alt=""
                    />
                </div>
                <button className="bg-[#db1f78] hover:bg-[white] hover:text-[black] text-white py-2 px-4 rounded-[49px] hover:bg-orange-600 transition duration-300 relative left-[80%] top-[-1441px]  w-[12%] h-[52px] font-bold ">
                    START A PROJECT
                </button>
                <button className="relative left-[1%] top-[-840px] bg-transparent border-2 rounded-[49px] w-[12%] h-[52px] font-bold hover:bg-[#db1f78] ">
                    START A PROJECT
                </button>


                <div id='members' className="text-center mt-5 border-3 border-white rounded-[110px] h-[188px]  rounded-[110px] font-bold bg-transparent  w-[13%] left-[75%] top-[-1229px] relative hover:text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-[#db1f78] ">
                    <a href="#" className="text-white-400 relative top-[82px] hover:text-white transition duration-300 ease-in-out hover:underline ">
                        See All Our Members
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experts;