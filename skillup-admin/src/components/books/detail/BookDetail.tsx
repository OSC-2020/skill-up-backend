import React, { useState } from 'react';
import { FaArrowsAlt } from 'react-icons/fa';
import {
    arrayMove,
    SortableContainer,
    SortableElement,
    SortableHandle
} from 'react-sortable-hoc';
import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";
import "./BookDetail.css";
import ChapterTile from "./ChapterTile";

const DragHandle = SortableHandle(() => <FaArrowsAlt className="text-gray-500 cursor-move mr-2" />);

const SortableItem = SortableElement(
    ({ id, title, idx }: {
        id: string;
        title: string;
        idx: number;
    }) => (<ChapterTile id={id} title={title} index={idx} >
        <DragHandle />
    </ChapterTile>)
);
const SortableList = SortableContainer(({ chapters }: { chapters: any[]; }) => {
    return (
        <div className="flex flex-col-reverse overflow-y-auto bookDetail__chapters">
            {
                chapters.map((chapter, index) => (<SortableItem idx={index} index={index} title={chapter.title} id={chapter.id} />))
            }
        </div>
    );
});


export const BookDetail = () => {
    const [chapters, setchapters] = useState(getDummyData());

    const onSortEnd = ({
        oldIndex,
        newIndex
    }: {
        oldIndex: number;
        newIndex: number;
    }) =>
        setchapters([
            ...arrayMove(chapters, oldIndex, newIndex)]);


    return (
        <main className="flex py-5 w-full">
            <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
                <div>Title: </div>
                <div>Total Chapters: </div>
            </nav>
            <section className="w-full ml-5 px-5 flex flex-col items-center">
                <MobileLayout>
                    <ScrollToBottom scrollBehaviour="smooth" className="h-full flex flex-col-reverse">
                        <SortableList useDragHandle chapters={chapters} onSortEnd={onSortEnd} />
                    </ScrollToBottom>
                </MobileLayout>
            </section>
        </main>
    );


};

function getDummyData() {
    const arr = [
        {
            position: 0,
            id: "0",
            title: "string1"
        },
        {
            position: 1,
            id: "1",
            title: "number2"
        },
        {
            position: 2,
            id: "2",
            title: "var3"
        },
        {
            position: 3,
            id: "3",
            title: "let4"
        },
        {
            position: 4,
            id: "4",
            title: "const5"
        },
        {
            position: 5,
            id: "5",
            title: "let6"
        },
        {
            position: 6,
            id: "6",
            title: "const7"
        },
        {
            position: 7,
            id: "7",
            title: "let8"
        }
    ];
    return [...arr];
}
