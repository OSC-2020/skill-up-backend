import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
    hidePrev?: boolean;
    hideNext?: boolean;
    footerText?: string
}

export const ChapterDetailFooter = (props: Props) => {
    return (
        <footer className="flex items items-center justify-evenly">
            {props.hidePrev ?
                null : <FaArrowLeft />
            }
            <input className="px-4 py-1 w-1/4 border border-gray-300" placeholder="Footer text" />
            {props.hideNext ?
                null : <FaArrowRight />
            }
        </footer>
    )
}
