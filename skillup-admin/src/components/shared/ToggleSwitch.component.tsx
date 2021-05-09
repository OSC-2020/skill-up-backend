import React, { useEffect, useState } from 'react'

interface Props {
    valueSetColor?: string;
    valueUnSetColor?: string;
    bgColor?: string;
    onSwitchCallback: (isOn: boolean) => void;
    initialVal: boolean;
}

export const ToggleSwitch = (props: Props) => {
    const [isSet, setIsSet] = useState(props.initialVal || false);

    function toggleTheme() {
        setIsSet(!isSet);
    }

    useEffect(() => {
        props.onSwitchCallback(isSet);
    }, [isSet, props])

    let toggleCircleCss = `w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white`;
    if (isSet) {
        toggleCircleCss = `${toggleCircleCss} ${props.valueSetColor || "bg-green-400"} -translate-x-2`;
    } else {
        toggleCircleCss = `${toggleCircleCss} ${props.valueSetColor || "bg-gray-700"} translate-x-full`;
    }
    const btnCss = `w-20 h-10 rounded-full ${props.bgColor || "bg-gray-300"} flex items-center transition duration-300 focus:outline-none shadow`
    return (
        <button
            className={btnCss} onClick={toggleTheme}>
            <div className={toggleCircleCss}>
            </div>
        </button>
    )
}
