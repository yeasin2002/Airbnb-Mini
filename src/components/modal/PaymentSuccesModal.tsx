import {
  BriefcaseBusiness,
  CircleCheckBig,
  Download,
  File,
  MessageCircleMore,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const PaymentSuccessModal = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        {/* Success Message Section */}
        <div className="text-center my-12">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
            <CircleCheckBig className="fas fa-check-circle text-4xl text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-zinc-600 mb-8">
            Your booking has been confirmed. Check your email for details.
          </p>
        </div>
        {/* Booking Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start gap-6 mb-6 pb-6 border-b">
            <Image
              width={200}
              height={200}
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property"
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Sea View Room</h2>
              <div className="flex items-center mb-2">
                <Star className="fas fa-star text-sm mr-1" />
                <span className="text-sm">4.6 (500+ reviews)</span>
              </div>
              <p className="text-zinc-600">
                One room and one living room with a straight sea view....
              </p>
            </div>
          </div>
          {/* Reservation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Reservation Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600 text-sm">Check-in</span>
                  <span className="text-zinc-500 text-sm">Jan 3, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 text-sm">Check-out</span>
                  <span className="text-zinc-500 text-sm">Jan 8, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 text-sm">Guests</span>
                  <span className="text-zinc-500 text-sm">1 guest</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Total amount paid</span>
                  <span className="font-semibold">$364.20</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600 text-sm">Booking ID</span>
                  <span>BOOK123456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6">Next Steps</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-primary">
                <File className="fas fa-envelope text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Check your email</h4>
                <p className="text-zinc-600">
                  {`We've`} sent your confirmation and trip details to your
                  email address.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary">
                <MessageCircleMore className="fas fa-comment-alt text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Message your host</h4>
                <p className="text-zinc-600">
                  Introduce yourself and let them know your travel plans.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary">
                <BriefcaseBusiness className="fas fa-suitcase text-xl" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Plan your trip</h4>
                <p className="text-zinc-600">
                  Review house rules and check-in instructions in your trip
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:brightness-90">
            <Download className="fas fa-download mr-2" />
            Download Receipt
          </button>
        </div>
        {/* Need Help Section */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600">Need help with your booking?</p>
          <a href="#" className="text-primary hover:underline">
            Visit our Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
