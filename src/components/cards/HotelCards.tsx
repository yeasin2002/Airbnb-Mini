import { BedDouble } from "lucide-react";
import Image from "next/image";
import React from "react";
// interface Props extends React.ComponentProps<"div"> {}

export const HotelCards = () => {
  return (
    <a href="details.html" className="block group">
      <div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Maldives Paradise"
            className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform"
            width={1980}
            height={1080}
          />
          <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
            <BedDouble className="ph-bed inline-block mr-1" />3 Rooms Left
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Maldives Paradise</h3>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-zinc-600">4.9</span>
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-1">Himmafushi, Maldives</p>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <span className="font-bold">$450</span>
              <span className="text-zinc-500 text-sm">per night</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
