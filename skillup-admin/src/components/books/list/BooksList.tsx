import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BookListTile } from "./BookListTile";

export default class BooksList extends Component {
  state = {};
  data = [
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
  titles = [
    { title: "Interview", data: this.data },
    { title: "Basic", data: this.data },
    { title: "intermediate", data: this.data },
  ];

  render() {
    return (
      <section className="text-gray-600 body-font px-5">
        <NavLink to="/books/list/create">
          <button className="mt-5 skillup-btn">Create book list</button>
        </NavLink>
        {this.titles.map((grp) => (
          <BookListTile title={grp.title} data={grp.data} />
        ))}
      </section>
    );
  }
}
