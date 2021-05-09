import React, { useState } from 'react'
import { TheoryContentInput } from "./ContentInput.component";
interface Props {

}

export const TheoryDynamicContent = (props: Props) => {
    const [contentArr, setContentArr] = useState<number[]>([]);
    const addToContentArr = () => setContentArr([...contentArr, 1])
    return (
        <section className="flex justify-center py-8 w-full">
            <article className="w-full">
                {contentArr.map((_, idx: number) =>
                    <div className="my-2" key={idx}>
                        <TheoryContentInput />
                    </div>
                )}
                <div className=" my-4 flex justify-center border-dashed border-2 border-gray-300 cursor-pointer py-2 skillup-text-color-primary skillup-background-color-bg  hover:border-blue-300 rounded duration-200 transition"
                    onClick={addToContentArr}>
                    Add
                </div>
            </article>
        </section>
    )
}
