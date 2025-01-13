import Image from "next/image";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const NoBookingFound = ({ ...props }: Props) => {
  return (
    <div id="empty-state" className="hidden text-center py-12" {...props}>
      <Image
        src="./no-bookings-icon.svg"
        alt="No Bookings"
        className="mx-auto mb-4 w-32 h-32"
        width={128}
        height={128}
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Bookings Yet
      </h2>
      <p className="text-zinc-500 text-sm">
        You {`haven't`} made any bookings. Start exploring amazing stays!
      </p>
    </div>
  );
};
