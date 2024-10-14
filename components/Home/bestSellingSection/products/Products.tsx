import React from 'react';
import '@/components/Home/bestSellingSection/products/Product.css';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Image_1 from '@/public/Products/image_1.jpg';

const Products = () => {
   return (
      <div className="w-full py-3 px-1">
         <Card className="card w-full flex justify-between align-middle items-center">
            <div className="my-auto flex flex-col items-start">
               <h2 className="title">Best Selling</h2>
               <p className="description">
                  All the best selling products in one place
               </p>
            </div>
            <Button variant="normal" className="see-all-button ">
               See All
            </Button>
         </Card>
         <div className="w-full h-[400px] flex justify-between gap-3 overflow-x-auto overflow-y-hidden mt-3">
            <Card className="min-w-[241px] max-w-[241px] min-h-[370px] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
               <CardHeader className="p-1 rounded-xl">
                  <Image
                     src={Image_1}
                     alt="Slide 1"
                     width={500}
                     height={350}
                     className="rounded-xl h-[200px] object-cover"
                  />
               </CardHeader>
               <CardContent className="p-2">
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                     Deploy your new project in one-click.
                  </CardDescription>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★★★★☆</span>
                     <span className="ml-2 text-gray-600">(100)</span>
                  </div>
               </CardContent>
               <CardFooter className="w-full">
                  <span className="block w-full text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
                     See More
                  </span>
               </CardFooter>
            </Card>
            <Card className="min-w-[241px] max-w-[241px] min-h-[370px] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
               <CardHeader className="p-1 rounded-xl">
                  <Image
                     src={Image_1}
                     alt="Slide 1"
                     width={500}
                     height={350}
                     className="rounded-xl h-[200px] object-cover"
                  />
               </CardHeader>
               <CardContent className="p-2">
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                     Deploy your new project in one-click.
                  </CardDescription>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★★★★☆</span>
                     <span className="ml-2 text-gray-600">(100)</span>
                  </div>
               </CardContent>
               <CardFooter className="w-full">
                  <span className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
                     See More
                  </span>
               </CardFooter>
            </Card>
            <Card className="min-w-[241px] max-w-[241px] min-h-[370px] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
               <CardHeader className="p-1 rounded-xl">
                  <Image
                     src={Image_1}
                     alt="Slide 1"
                     width={500}
                     height={350}
                     className="rounded-xl h-[200px] object-cover"
                  />
               </CardHeader>
               <CardContent className="p-2">
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                     Deploy your new project in one-click.
                  </CardDescription>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★★★★☆</span>
                     <span className="ml-2 text-gray-600">(100)</span>
                  </div>
               </CardContent>
               <CardFooter className="w-full">
                  <span className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
                     See More
                  </span>
               </CardFooter>
            </Card>
            <Card className="min-w-[241px] max-w-[241px] min-h-[370px] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
               <CardHeader className="p-1 rounded-xl">
                  <Image
                     src={Image_1}
                     alt="Slide 1"
                     width={500}
                     height={350}
                     className="rounded-xl h-[200px] object-cover"
                  />
               </CardHeader>
               <CardContent className="p-2">
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                     Deploy your new project in one-click.
                  </CardDescription>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★★★★☆</span>
                     <span className="ml-2 text-gray-600">(100)</span>
                  </div>
               </CardContent>
               <CardFooter className="w-full">
                  <span className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200">
                     See More
                  </span>
               </CardFooter>
            </Card>
         </div>
      </div>
   );
};

export default React.memo(Products);
