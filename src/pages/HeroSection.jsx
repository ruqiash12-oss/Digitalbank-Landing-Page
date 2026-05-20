import heroImg from '../assets/images/image-mockups.png';

import '../index.css'
export default function HeroSection() {
  return (
    <section id='hero-section' className=" py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6">
        <div className="w-full md:w-1/2 text-center md:text-left lg:ml-25  ">
          <h1 className="text-5xl md:text-7xl mt-15  mb-4 ">Next generation digital banking</h1>
          <p className="text-gray-600 ml-1 leading-5  md:w-96 mt-6 mb-6 md:leading-6">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
          for spending, saving, budgeting, investing, and much more.</p>
          <button className="bg-gradient-to-bl from-green-500 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white py-3 px-9 font-semibold text-base rounded-full shadow-md shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Request Invite
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img src={heroImg} alt="Hero" className='-mt-56 md:-mt-50 md:ml-37 ' />
        </div>
      </div>
    </section>
  );
}