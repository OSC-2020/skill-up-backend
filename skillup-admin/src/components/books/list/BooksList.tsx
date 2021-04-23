import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllBookGroups } from "../../../redux/slices/bookGroups/bookGroups.slice";
import { BookListTile } from "./BookListTile";

const data = [
  {
    sub: "SUBTITLE",
    title: "Chichen Itza",
    footerText:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
  },
  {
    sub: "SUBTITLE",
    title: "Colosseum Roma",
    footerText:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
  },
  {
    sub: "SUBTITLE",
    title: "Great Pyramid of Giza",
    footerText:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
  },
  {
    sub: "SUBTITLE",
    title: "San Francisco",
    footerText:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
  },
];
const titles = [
  { title: "Interview", data: data },
  { title: "Basic", data: data },
  { title: "intermediate", data: data },
];

export default function BooksList() {
  const dispatch = useAppDispatch();
  const bookGroupsSlice = useAppSelector((state) => state.bookGroups);

  if (!bookGroupsSlice.loadedOnce) {
    dispatch(fetchAllBookGroups());
  }

  return (
    <section className="text-gray-600 body-font px-5">
      <NavLink to="/books/list/create">
        <button className="mt-5 skillup-btn">Create book list</button>
      </NavLink>
      {bookGroupsSlice.groups.map((grp) => (
        <BookListTile title={grp.title} data={grp.books} />
      ))}
    </section>
  );
}
