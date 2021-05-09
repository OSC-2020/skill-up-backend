import React, { useState } from 'react'
import { TheoryContentInput } from '../theory/ContentInput.component'

interface Props {

}

export const QuizOptions = (props: Props) => {
    const [contentArr, setContentArr] = useState<number[]>([]);
    const addToContentArr = () => setContentArr([...contentArr, 1])

    return (
        <section className="border border-gray-300 rounded p-4">
            <h2 className="sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900">
                Answer options
            </h2>
            {contentArr.map((_, idx: number) =>
                <div className="my-2" key={idx}>
                    <Option />
                </div>
            )}
            <div className=" my-4 flex justify-center border-dashed border-2 border-gray-300 cursor-pointer py-2 skillup-text-color-primary skillup-background-color-bg  hover:border-blue-300 rounded duration-200 transition"
                onClick={addToContentArr}>
                Add option
            </div>
        </section>
    )
}


interface OptionProps {

}

export const Option = (props: OptionProps) => {
    return (
        <TheoryContentInput isQuizOption={true} />
    )
}
