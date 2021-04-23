import React from "react";
import { IBooks } from "../../../redux/slices/bookGroups/bookGroups.slice";

interface BookTileProps extends IBooks {
  sub?: string;
}

export const BookTile = (props: BookTileProps) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {props.sub}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.description}</p>
      </div>
    </div>
  );
};

interface Props {
  data: IBooks[];
  title: string;
}

export const BookListTile = (props: Props) => {
  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-wrap w-full mb-10">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {props.title}
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {props.data.map((v, idx) => (
          <BookTile title={v.title} description={v.description} key={idx} />
        ))}
      </div>
    </div>
  );
};
