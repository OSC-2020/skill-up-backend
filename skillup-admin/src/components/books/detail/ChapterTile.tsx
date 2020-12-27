import { throws } from 'assert';
import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { dynamicCSSClass } from "../../../utilities/string";

interface Props {
    id: string;
    title: string;
    index: number;
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
        if (pos == 0) {
            return "mr-auto";
        } else if (pos == 1 || pos == 3) {
            return "mx-auto";
        }
        return "ml-auto";
    };

    editStart(e: React.MouseEvent) {
        this.view = e.currentTarget;
        this.input = document.createElement('textarea');
        this.input.className = 'p-1 border-2 border-gray-100';
        this.input.value = e.currentTarget.innerHTML;

        this.input.onkeydown = (event: KeyboardEvent) => {
            if (event.key == 'Enter') {
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
            <div className={"p-2 rounded-md skillup-background-color-bg font-medium shadow-lg mt-5 w-2/3 flex items-center justify-between" + (dynamicCSSClass(this.getHorizMargin(this.props.index)))}>

                <span onClick={(e) => this.editStart(e)}
                    className="cursor-pointer w-4/5">
                    {this.props.title}
                </span>
                <FaTrash color="red" className="cursor-pointer text-base w-1/5" />
            </div>
        );
    }
}