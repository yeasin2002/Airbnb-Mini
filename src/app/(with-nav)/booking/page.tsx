import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookingPage = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
        <div className="space-y-4">
          {/* Booking Item 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <Image
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property Thumbnail"
                className="w-24 h-24 object-cover rounded-md"
                width={200}
                height={200}
              />
              <div>
                <h2 className="text-lg text-zinc-800 font-semibold">
                  Cozy Mountain Cabin
                </h2>
                <p className="text-zinc-500 text-sm">
                  Booking Date: June 15, 2024
                </p>
                <p className="text-zinc-500 text-sm">Booking Code: #AB12345</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:brightness-90">
                View Trip Details
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="fas fa-download mr-2" />
                Download Receipt
              </button>
            </div>
          </div>
          {/* Booking Item 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property Thumbnail"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg text-zinc-800 font-semibold">
                  Beachfront Apartment
                </h2>
                <p className="text-zinc-500 text-sm">
                  Booking Date: July 20, 2024
                </p>
                <p className="text-zinc-500 text-sm">Booking Code: #CD67890</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:brightness-90">
                View Trip Details
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="fas fa-download mr-2" />
                Download Receipt
              </button>
            </div>
          </div>
          {/* Booking Item 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <Image
                height={200}
                width={200}
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property Thumbnail"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg text-zinc-800 font-semibold">
                  Urban Loft Downtown
                </h2>
                <p className="text-zinc-500 text-sm">
                  Booking Date: August 5, 2024
                </p>
                <p className="text-zinc-500 text-sm">Booking Code: #EF54321</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:brightness-90">
                View Trip Details
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="fas fa-download mr-2" />
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
