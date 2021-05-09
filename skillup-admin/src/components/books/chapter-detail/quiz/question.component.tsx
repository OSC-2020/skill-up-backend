import React from 'react'
import { TheoryDynamicContent } from '../theory/DynamicContent.component'

interface Props {
    className?: string
}

export const QuizQuestion = (props: Props) => {
    return (
        <section className={`border border-gray-300 rounded pt-4 px-4 ` + props.className || ""}>
            <h2 className="sm:text-2xl text-xl font-medium title-font mb-4 text-gray-900">
                Question statement
            </h2>
            <TheoryDynamicContent />
        </section>
    )
}
