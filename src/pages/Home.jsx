import { Link } from 'react-router-dom';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';


const Home = () => {
  const topApps = appsData.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#f5f5f5] pt-20 text-center">
        <div className="container mx-auto px-4">


          <h1 className="text-[#192f45] text-5xl inter md:text-6xl font-bold mb-4">We Build <br />
          {/* i add a font style */}
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8452e9] to-[#9b66f0] inter">Productive</span> Apps</h1>


          <p className="text-sm font-semibold text-[#627382] pb-10 inter "><span>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</span></p>


          <div className="flex justify-center space-x-4 mb-12">
            <div className='flex justify-center items-center gap-2 border border-[#d2d2d2] p-3 rounded-sm '>
              <img className="w-5 h-5" src="./images.png" alt="" />
            <Link to="https://play.google.com/" className="font-bold inter ">Google Play</Link> </div>
            <div className='flex justify-center items-center gap-2 border border-[#d2d2d2] p-3 rounded-sm '>
              <img className="w-5 h-5" src="./apple.png" alt="" />
            <Link to="https://www.apple.com/app-store/" className="font-bold inter ">App Store</Link> </div>
  
          </div>
          <div className="flex justify-center">
            <img src="./hero.png" alt="" />
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-r from-[#6d37e5] to-[#9f62f2] h-auto flex flex-col justify-center items-center w-full mx-auto p-4'>
        <div className="title-section text-center">
          <h1 className='text-4xl font-bold text-white py-10 inter'>Trusted by Millions, Built for You</h1>
        </div>
        <div className="main-details md:flex md:justify-around md:gap-50 md:pb-10">
          <div className="perant1 text-center">
            <p className='text-[#e4d9fb] text-sm py-1 inter '>Total Downloads</p>
            <h1 className='font-bold text-white text-5xl py-0.5 inter'>29.6M</h1>
            <p className='text-[#e4d9fb] text-sm pb-10 md:py-1 inter'>21% more than last month</p>
          </div>
          <div className="perant2 text-center">
            <p className='text-[#e4d9fb] text-sm py-1 inter'>Total Reviews</p>
            <h1 className="font-bold text-white text-5xl py-0.5 inter">906K</h1>
            <p className='text-[#e4d9fb] text-sm pb-10 md:py-1 inter'>46% more than last month</p>
          </div>
          <div className="perant3 text-center">
            <p className='text-[#e4d9fb] text-sm py-1 inter'>Active Apps</p>
            <h1 className="font-bold text-white text-5xl py-0.5 v">132+</h1>
            <p className="text-[#e4d9fb] text-sm pb-10 md:py-1 inter">31 more will Launch</p>
          </div>
        </div>
      </section>
      {/* Trending Apps */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#001931] inter">Trending Apps</h2>
          <p className="text-[#627382] mb-8 text-center inter">Explore All Trending Apps on the Market developed by us</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {topApps.map(app => <AppCard key={app.id} app={app} />)}
          </div>
          <div className="text-center">
            <Link to="/apps" className="bg-gradient-to-r from-[#6d37e5] to-[#9f62f2] text-white px-8 py-2 rounded-sm hover:bg-purple-700 inter">Show All</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;