import React from "react";
import { arrayOfSize } from "../../../utilities/array";

interface EditableBookTileProps {}

export const EditableBookTile = (props: EditableBookTileProps) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          <input
            placeholder="book title"
            className="rounded pl-2 pr-2 pt-1 pb-1"
          />
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mt-2 mb-4">
          <input
            placeholder="book description"
            className="rounded w-full pl-2 pr-2 pt-1 pb-1"
          />
        </h2>
        <p className="leading-relaxed text-base">
          <textarea
            placeholder="footer description"
            className="rounded pl-2 pr-2 pt-1 pb-1 w-full"
          ></textarea>
        </p>
      </div>
    </div>
  );
};

interface Props {
  groupSize?: number;
}

export const EditableBookListTile = (props: Props) => {
  let groupSizeArray = arrayOfSize(props.groupSize || 4);
  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-wrap w-full mb-10">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <input
              placeholder="Group Title"
              className="rounded pl-2 pr-2 pt-1 pb-1"
            />
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {groupSizeArray.map((v) => (
          <EditableBookTile />
        ))}
      </div>
    </div>
  );
};
