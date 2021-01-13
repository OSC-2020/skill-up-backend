import React from 'react';
import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";
import "./BookDetail.css";
import ChapterTile from "./ChapterTile";


export const BookDetail = () => {
    const chapters = getDummyData();
    return (
        <main className="flex py-5 w-full">
            <nav className="p-3 rounded-md skillup-background-color-bg font-medium shadow-lg w-1/4">
                <div>Title: </div>
                <div>Total Chapters: </div>
            </nav>
            <section className="w-full ml-5 px-5 flex flex-col items-center">
                <MobileLayout>
                    <ScrollToBottom scrollBehaviour="smooth" className="h-full flex flex-col-reverse">
                        <div className="flex flex-col-reverse overflow-y-auto bookDetail__chapters">
                            {
                                chapters.map((chapter, index) => (
                                    <div>
                                        <ChapterTile id={chapter.id} title={chapter.title} index={index} />
                                        <span className="flex rounded my-3 w-full hover:bg-blue-500 h-0.5 bg-blue-200 relative cursor-pointer bookDetail__addChapter"></span>
                                    </div>
                                ))
                            }
                        </div>
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
