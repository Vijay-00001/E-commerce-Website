import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeComponent from '@/components/Home/HomeComponent';
import Swiper from '@/components/swiper/Swiper';

export default function Home() {
   return (
      <>
         {/* <h1>Ecommerce Website</h1>
      <h2>Shree Ganeshay namah:</h2> */}
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-3 shadow-box-shadow">
            <Header />
            <Navigation />
         </div>
         <div className="container bg-white rounded-lg py-5 my-2">
            <Swiper />
         </div>
         <div className="container bg-white my-5 rounded-lg max-h-max">
            <HomeComponent />
         </div>
      </>
   );
}
