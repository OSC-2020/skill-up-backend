import React, { Component } from "react";
import { FaArrowDown, FaArrowUp, FaTrash } from "react-icons/fa";
import { dynamicCSSClass } from "../../../utilities/string";

interface Props {
  id: string;
  title: string;
  index: number;
  onDelete: (id: string | number) => void;
  onMoveUp: (id: string | number) => void;
  onMoveDown: (id: string | number) => void;
}

interface State {
  currentlyEditing: boolean;
}

export default class ChapterTile extends Component<Props, State> {
  state = { currentlyEditing: false };
  view: any;
  input: HTMLTextAreaElement | undefined;

  getHorizMargin = (index: number) => {
    const pos = index % 4;
    if (pos === 0) {
      return "mr-auto";
    } else if (pos === 1 || pos === 3) {
      return "mx-auto";
    }
    return "ml-auto";
  };

  editStart(e: React.MouseEvent) {
    this.view = e.currentTarget;
    this.input = document.createElement("textarea");
    this.input.className = "p-1 border-2 border-gray-100";
    this.input.value = e.currentTarget.innerHTML;

    this.input.onkeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        this.input?.blur();
      }
    };

    this.input.onblur = () => {
      this.editEnd();
    };

    this.view.replaceWith(this.input);
    this.input.focus();
  }

  editEnd() {
    // TODO: Save data to DB and store here
    this.view.innerHTML = this.input?.value;
    this.input?.replaceWith(this.view);
  }

  render() {
    return (
      <div
        className={
          "p-2 rounded-md skillup-background-color-bg font-medium shadow-lg w-2/3 flex items-center justify-between" +
          dynamicCSSClass(this.getHorizMargin(this.props.index))
        }
      >
        {this.props.children}
        <span
          onClick={(e) => this.editStart(e)}
          className="cursor-pointer w-4/5"
        >
          {this.props.title}
        </span>
        {!this.state.currentlyEditing && (
          <section className="flex items-center justify-between">
            <FaTrash
              color="red"
              className="cursor-pointer text-base w-2/5"
              onClick={() => this.props.onDelete(this.props.id)}
            />
            <span className="flex flex-col items-center w-1/3">
              <FaArrowUp
                className="cursor-pointer text-base"
                onClick={() => this.props.onMoveUp(this.props.id)}
              />
              <FaArrowDown
                className="cursor-pointer text-base"
                onClick={() => this.props.onMoveDown(this.props.id)}
              />
            </span>
          </section>
        )}
      </div>
    );
  }
}
