import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllBookGroups } from "../../../redux/slices/bookGroups/bookGroups.slice";
import { BookListTile } from "./BookListTile";

export default function BooksList() {
  const dispatch = useAppDispatch();
  const bookGroupsSlice = useAppSelector((state) => state.bookGroups);

  if (!bookGroupsSlice.loadedOnce) {
    dispatch(fetchAllBookGroups());
  }

  return (
    <section className="text-gray-600 body-font px-5 w-full">
      <NavLink to="/books/list/create">
        <button className="mt-5 skillup-btn-primary">Create book list</button>
      </NavLink>
      {bookGroupsSlice.groups.map((grp, idx) => (
        <BookListTile
          title={grp.title}
          data={grp.books}
          id={grp.id as string}
          key={idx}
        />
      ))}
    </section>
  );
}
