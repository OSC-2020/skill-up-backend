import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import {
  deleteBookGroup_MW,
  publishBookGroup_MW,
  unpublishBookGroup_MW,
  IBooks
} from "../../../redux/slices/bookGroups";

interface BookTileProps extends IBooks {
  sub?: string;
}

export const BookTile = (props: BookTileProps) => {
  return (
    <NavLink
      to={`/books/detail/${props.id}`}
      className="xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full w-full p-4"
    >
      <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {props.sub}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.description}</p>
      </div>
    </NavLink>
  );
};

interface Props {
  id: string;
  title: string;
  isPublished: boolean;
  data: IBooks[];
}

export const BookListTile = (props: Props) => {
  const dispatch = useAppDispatch();
  const deleteGroup = () => {
    dispatch(deleteBookGroup_MW(props.id));
  };
  const changePublishState = () => {
    if (props.isPublished) {
      dispatch(unpublishBookGroup_MW(props.id));
    } else {
      dispatch(publishBookGroup_MW(props.id));
    }
  };

  return (
    <div className="container py-12 mx-auto">
      <div className="flex flex-wrap w-full mb-10">
        <div className="w-full mb-6 lg:mb-0">
          <div className="flex justify-between">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {props.title}
            </h1>
            <article>
              <NavLink to={`/books/list/edit/${props.id}`}>
                <button className="skillup-btn mr-2">Edit</button>
              </NavLink>
              <button
                className={
                  "mr-2 " +
                  (props.isPublished ? "skillup-btn" : "skillup-btn-success")
                }
                onClick={changePublishState}
              >
                {props.isPublished ? "Unpublish" : "Publish"}
              </button>
              <button className="skillup-btn-danger" onClick={deleteGroup}>
                Delete
              </button>
            </article>
          </div>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4 w-full">
        {props.data.map((book, idx) => (
          <BookTile
            id={book.id}
            title={book.title}
            description={book.description}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
