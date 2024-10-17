import Header from '@/components/header';
import Navigation from '@/components/navigation';
import HomeComponent from '@/components/home/HomeComponent';
import Swiper from '@/components/swiper/Swiper';
import Experiance from '@/components/experience/experiance';

export default function Home() {
   return (
      <>
         {/* <h1>Ecommerce Website</h1>
      <h2>Shree Ganeshay namah:</h2> */}
         {/* <Experiance /> */}
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-3 shadow-blur">
            <Header />
            <Navigation />
         </div>
         <div className="container my-7 rounded-lg">
            <Swiper />
         </div>
         <div className="container my-7 rounded-lg">
            <HomeComponent />
         </div>
      </>
   );
}
