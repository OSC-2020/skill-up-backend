import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllBookGroups_MW } from "../../../redux/slices/bookGroups";
import { selectBookGroupSlice } from '../../../redux/store';
import { BookListTile } from "./BookListTile";

export default function BooksList() {
  const dispatch = useAppDispatch();
  const bookGroupsSlice = useAppSelector(selectBookGroupSlice);

  useEffect(() => {
    dispatch(fetchAllBookGroups_MW());
  }, [dispatch]);

  return (
    <section className="text-gray-600 body-font px-5 w-full">
      <NavLink to="/books/list/create">
        <button className="mt-5 skillup-btn-primary">Create book list</button>
      </NavLink>
      {bookGroupsSlice.groups.map((grp, idx) => (
        <BookListTile
          id={grp.id as string}
          title={grp.title}
          isPublished={grp.isPublished}
          data={grp.books}
          key={idx}
        />
      ))}
    </section>
  );
}
