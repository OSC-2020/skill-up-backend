import React, { useState } from 'react'

interface Props {

}

export enum EContentType {
    TEXT,
    CODE
}

export const TheoryContentInput = (props: Props) => {
    const [contentType, setContentType] = useState(EContentType.TEXT);
    const [isTextAreaInFocus, setIsTextAreaInFocus] = useState(false);
    
    const getPillCss = (active: boolean) => {
        const activeCss = `skillup-background-color-primary text-white`;
        const inactiveCss = `bg-gray-300 skillup-text-color-primary`
        return `rounded-full py-1 px-4 cursor-pointer ${active ? activeCss : inactiveCss}`;
    }
    const containerCss = `w-full border rounded ${isTextAreaInFocus ? 'border-blue-300 shadow-lg' : 'border-gray-300'}`;

    return (
        <section className={containerCss}>
            <textarea className="w-full px-4 py-2 resize-none"
                placeholder="Add content here"
                onFocus={() => setIsTextAreaInFocus(true)}
                onBlur={() => setIsTextAreaInFocus(false)} />
            <article className="flex pt-2 pb-3 px-2">
                <div className={getPillCss(contentType === EContentType.TEXT) + " mr-2"}
                    onClick={() => setContentType(EContentType.TEXT)}>
                    Text
                </div>
                <div className={getPillCss(contentType === EContentType.CODE)}
                    onClick={() => setContentType(EContentType.CODE)}>
                    Code
                </div>
            </article>
        </section>
    )
}
