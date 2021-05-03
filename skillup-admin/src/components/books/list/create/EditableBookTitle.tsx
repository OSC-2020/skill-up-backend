import { Field } from "formik";
import React from "react";
import { IBooks } from "../../../../redux/slices/bookGroups";

interface EditableBookTileProps {
  book: IBooks;
  idx: number;
}

export const EditableBookTile = (props: EditableBookTileProps) => {
  const titleName = `books[${props.idx}].title`;
  const descriptionName = `books[${props.idx}].description`;
  return (
    <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full w-full p-4">
      <div className="bg-gray-100 shadow-lg p-6 rounded-lg ">
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
          <Field
            name={titleName}
            placeholder="Book title"
            className="rounded pl-2 pr-2 pt-1 pb-1"
          />
        </h3>

        <p className="leading-relaxed text-base">
          <Field
            type="textarea"
            name={descriptionName}
            placeholder="Book description"
            className="rounded pl-2 pr-2 pt-1 pb-1 w-full"
          />
        </p>
      </div>
    </div>
  );
};

interface Props {
  books: IBooks[];
}

export const EditableBookGroupTile = (props: Props) => {
  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-wrap w-full mb-10">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <Field
              name="title"
              placeholder="Group Title"
              className="rounded pl-2 pr-2 pt-1 pb-1"
            />
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {props.books.map((book, idx) => (
          <EditableBookTile key={idx} book={book} idx={idx} />
        ))}
      </div>
    </div>
  );
};
