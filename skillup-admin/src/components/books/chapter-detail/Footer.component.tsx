import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Props {
    hidePrev?: boolean;
    hideNext?: boolean;
    footerText?: string
}

export const ChapterDetailFooter = (props: Props) => {
    return (
        <footer className="flex items items-center justify-evenly skillup-background-color-bg py-4">
            {props.hidePrev ?
                null : <FaArrowLeft className="cursor-pointer text-3xl" />
            }
            <input className="px-4 py-1 w-1/4 border border-gray-300 rounded"
                placeholder="Footer text" />
            {props.hideNext ?
                null : <FaArrowRight className="cursor-pointer text-3xl" />
            }
        </footer>
    )
}
