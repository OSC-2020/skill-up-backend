import React, { useEffect, useState } from 'react'

interface Props {
    valueSetColor?: string;
    valueUnSetColor?: string;
    bgColor?: string;
    size?: 'lg' | 'md' | 'sm';
    onSwitchCallback: (isOn: boolean) => void;
    initialVal: boolean;

}

export const ToggleSwitch = (props: Props) => {
    const [isSet, setIsSet] = useState(props.initialVal || false);
    const size = props.size || 'md';
    let btnWidth = 16, circleWidth = 8;
    switch (size) {
        case 'lg':
            btnWidth = 20;
            circleWidth = 10;
            break;
        case 'sm':
            btnWidth = 12;
            circleWidth = 6;
            break;
    }
    function toggleTheme() {
        setIsSet(!isSet);
    }

    useEffect(() => {
        props.onSwitchCallback(isSet);
    }, [isSet, props])

    let toggleCircleCss = `w-${circleWidth} h-${circleWidth} relative rounded-full transition duration-500 transform p-1 text-white`;
    if (isSet) {
        toggleCircleCss = `${toggleCircleCss} ${props.valueSetColor || "bg-green-400"}`;
    } else {
        toggleCircleCss = `${toggleCircleCss} ${props.valueSetColor || "bg-gray-700"} translate-x-full`;
    }
    const btnCss = `w-${btnWidth} h-${circleWidth} rounded-full ${props.bgColor || "bg-gray-300"} flex items-center transition duration-300 focus:outline-none shadow`
    return (
        <button
            className={btnCss} onClick={toggleTheme}>
            <div className={toggleCircleCss}>
            </div>
        </button>
    )
}
