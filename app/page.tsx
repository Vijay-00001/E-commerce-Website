import Header from '@/components/header';
import Navigation from '@/components/navigation';
import HorizontalCardLayout from '@/components/cards/horizontalCardLayout/HorizontalCardLayout';
import VerticalCardLayout from '@/components/cards/verticalCardLayout/VerticalCardLayout';

export default function Home() {
   return (
      <>
         <h1>Ecommerce Website</h1>
         <h2>Shree Ganeshay namah:</h2>
         <div className="container bg-white rounded-lg pt-3 pb-5 mt-3 shadow-blur">
            <Header />
            <Navigation />
         </div>
         <div className="container my-7 rounded-lg flex gap-3">
            <VerticalCardLayout />
            <HorizontalCardLayout />
         </div>
      </>
   );
}
