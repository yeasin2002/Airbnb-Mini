import React from "react";
interface Props extends React.ComponentProps<"footer"> {}

export const Footer = ({ ...props }: Props) => {
  return (
    <footer
      className="mt-12 text-sm text-zinc-500 max-w-7xl mx-auto py-4"
      {...props}
    >
      <p>© 2024 Learn with Sumit • Terms • Privacy • Your Privacy Choices</p>
    </footer>
  );
};
