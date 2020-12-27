import React, { Component, ReactElement } from 'react';
import ChapterTile from "./ChapterTile";
import "./BookDetail.css";
import { MobileLayout } from "../../shared/MobileLayout";
import ScrollToBottom from "../../shared/ScrollToBottom";

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
                    <ScrollToBottom scrollBehaviour="smooth">
                        {chapters.map((chapter, index) =>
                            <ChapterTile id={chapter.id} title={chapter.title} index={index} />
                        )}
                    </ScrollToBottom>
                </MobileLayout>
            </section>
        </main>
    );


};

function getDummyData() {
    const arr = [
        {
            id: "",
            title: "string1"
        },
        {
            id: "",
            title: "number2"
        },
        {
            id: "",
            title: "var3"
        },
        {
            id: "",
            title: "let4"
        },
        {
            id: "",
            title: "const5"
        },
        {
            id: "",
            title: "let6"
        },
        {
            id: "",
            title: "const7"
        },
        {
            id: "",
            title: "let8"
        },
        {
            id: "",
            title: "const8"
        },
        {
            id: "",
            title: "string1"
        },
        {
            id: "",
            title: "number2"
        },
        {
            id: "",
            title: "var3"
        },
        {
            id: "",
            title: "let4"
        },
        {
            id: "",
            title: "const5"
        },
        {
            id: "",
            title: "let6"
        },
        {
            id: "",
            title: "const7"
        },
        {
            id: "",
            title: "let8"
        },
        {
            id: "",
            title: "const8"
        },
    ];
    return [...arr, ...arr, ...arr];
}
