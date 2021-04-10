import React from "react";
import { arrayOfSize } from "../../../utilities/array";
import { EditableBookListTile } from "./EditableBookTitle";

interface Props {
  groupSize?: number;
}

export const CreateBookList = (props: Props) => {
  return (
    <section className="text-gray-600 body-font w-full">
      <EditableBookListTile />
    </section>
  );
};
