import { PencilLine, Star, Trash2 } from "lucide-react";
import Image from "next/image";

const ManageHotels = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">Manage Hotels</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors">
            + Create Hotel
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hotel Card 1 */}
          <div className="overflow-hidden cursor-pointer">
            <div className="relative">
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Property"
                className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="fas fa-star text-yellow-500 mr-1" />
                4.8
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">
                Cozy Mountain Retreat
              </h2>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">3 Rooms Available</span>
                <span className="text-rose-600 font-semibold">$250/night</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">
                  Location: Mountain View, CA
                </span>
                <div className="space-x-2">
                  <a
                    href="./create.html"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <PencilLine />
                  </a>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hotel Card 2 */}
          <div className="overflow-hidden cursor-pointer">
            <div className="relative">
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Property"
                className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="fas fa-star text-yellow-500 mr-1" />
                4.5
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">
                Urban Loft Apartment
              </h2>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">2 Rooms Available</span>
                <span className="text-rose-600 font-semibold">$180/night</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">
                  Location: San Francisco, CA
                </span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">
                    <PencilLine />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hotel Card 3 */}
          <div className="overflow-hidden cursor-pointer">
            <div className="relative">
              <Image
                width={500}
                height={300}
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Property"
                className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
                <Star className="fas fa-star text-yellow-500 mr-1" />
                4.9
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-zinc-800 mb-2">
                Beachfront Villa
              </h2>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">5 Rooms Available</span>
                <span className="text-rose-600 font-semibold">$420/night</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">
                  Location: Santa Barbara, CA
                </span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">
                    <PencilLine />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="fas fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHotels;
