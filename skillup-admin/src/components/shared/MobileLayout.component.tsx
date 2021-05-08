import React from "react";

interface Props {
  children: React.ReactNode;
}

export const MobileLayout = (props: Props) => {
  return (
    <section className="w-72 pb-5 pt-2 px-5 border-2 border-gray-500 rounded-md flex flex-col items center overflow-y-auto shadow-md bg-gray-100 h-screen-4/5 bookChapters__chapters">
      {props.children}
    </section>
  );
};
