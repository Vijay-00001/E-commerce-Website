import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeComponent from '@/components/Home';

export default function Home() {
   return (
      <>
         {/* <h1>Ecommerce Website</h1>
      <h2>Shree Ganeshay namah:</h2> */}
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-3">
            <Header />
            <Navigation />
         </div>
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-[6px]">
            <HomeComponent />
         </div>
      </>
   );
}
