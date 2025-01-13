import {
  Bed,
  ChefHat,
  DoorOpen,
  Dumbbell,
  SquareParking,
  Umbrella,
  UserRound,
  WavesLadder,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const CreateHotel = () => {
  return (
    <div>
      <>
        {/* Property Details Container */}
        <div className="max-w-7xl mx-auto px-6 py-8 relative">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4">
            <i className="fas fa-save mr-2" />
            Publish
          </button>
          {/* Property Title and Rating */}
          <div className="mb-6">
            <h1
              className="text-3xl font-bold mb-2 text-zinc-400 edit"
              id="propertyName"
            >
              Property Name
            </h1>
            <div className="flex items-center text-gray-600">
              <span className="edit text-gray-600">Property location</span>
            </div>
          </div>
          {/* Image Gallery */}
          <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
            <div className="col-span-2 row-span-2 relative">
              <Image
                src="https://placehold.co/600x400"
                alt="Main Room"
                className="w-full h-full object-cover rounded-lg"
                width={600}
                height={400}
              />
              <input
                type="text"
                placeholder="https://placehold.co/600x400"
                className="w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
              />
            </div>
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="https://placehold.co/600x400"
                alt="Room 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <input
                type="text"
                placeholder="https://placehold.co/600x400"
                className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
              />
            </div>
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="https://placehold.co/600x400"
                alt="Room 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <input
                type="text"
                placeholder="https://placehold.co/600x400"
                className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
              />
            </div>
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="https://placehold.co/600x400"
                alt="Room 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <input
                type="text"
                placeholder="https://placehold.co/600x400"
                className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
              />
            </div>
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="https://placehold.co/600x400"
                alt="Room 4"
                className="w-full h-full object-cover rounded-lg"
              />
              <input
                type="text"
                placeholder="https://placehold.co/600x400"
                className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
              />
            </div>
          </div>
          <div className="mb-4">
            <span className="text-xl font-bold edit">Price in USD</span>
            <span className="text-gray-600 ml-1">per night</span>
          </div>
          <div className="mb-4">
            {/* Stock */}
            <span className="edit">Available X rooms</span>
          </div>
          {/* Property Details */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column: Property Description */}
            <div className="col-span-2">
              <div className="border-b pb-6 mb-6">
                <div className="grid grid-cols-1 gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <UserRound />
                    <span className="edit">How many Guest can Stay?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DoorOpen />
                    <span className="edit">How many Bedrooms ? </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed />
                    <span className="edit">How many beds available ?</span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">About this place</h3>
                <p className="text-gray-700 leading-relaxed edit">
                  Write a short description about this place
                </p>
              </div>
              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  What this place offers
                </h3>
                <div className="grid grid-cols-2 gap-4" id="amenities">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Umbrella />
                    <span>Beach access</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <WavesLadder />
                    <span>Private pool</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Wifi />
                    <span>Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <ChefHat />
                    <span>Kitchen</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <SquareParking />
                    <span>Free Parking</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Dumbbell />
                    <span>Fitness Center</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Booking Card */}
          </div>
        </div>
      </>
    </div>
  );
};

export default CreateHotel;
