import React from 'react'
import { QuizQuestion } from './question.component'
import { QuizOptions } from './options.component'

interface Props {

}

export const QuizTemplate = (props: Props) => {
    return (
        <main>
            <QuizQuestion className="my-4" />
            <QuizOptions />
        </main>
    )
}
