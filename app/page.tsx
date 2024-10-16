import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeComponent from '@/components/Home/HomeComponent';
import Swiper from '@/components/swiper/Swiper';
import Experiance from '@/components/experience/experiance';

export default function Home() {
   return (
      <>
         {/* <h1>Ecommerce Website</h1>
      <h2>Shree Ganeshay namah:</h2> */}
         {/* <Experiance /> */}
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-3 shadow-box-shadow">
            <Header />
            <Navigation />
         </div>
         <div className="container bg-black rounded-lg my-3 py-4 shadow-[15px_15px_21px_rgba(0,0,0,0.5)] ">
            <Swiper />
         </div>
         <div className="container bg-white my-5 rounded-lg max-h-max">
            <HomeComponent />
         </div>
      </>
   );
}
