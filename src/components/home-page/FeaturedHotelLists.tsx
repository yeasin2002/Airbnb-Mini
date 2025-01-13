import React from "react";
import { HotelCards } from "../cards";
interface Props extends React.ComponentProps<"div"> {}

export const FeaturedHotelLists = ({ ...props }: Props) => {
  return (
    <section className="px-6" {...props}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <HotelCards key={index} />
        ))}
      </div>
    </section>
  );
};
