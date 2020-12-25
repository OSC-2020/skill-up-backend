import React, { Component } from 'react';
import { IconType } from 'react-icons';

interface Props {
    title: string;
    Icon: IconType;
    isActive?: boolean;

}

export default class HeaderTab extends Component<Props> {

    render() {
        const Icon = this.props.Icon;
        return (
            <div className={"flex items-center p-3 mr-1 cursor-pointer transition-colors hover:rounded-md hover:skillup-text-color-primary hover:skillup-background-color-bg " + (this.props.isActive ? "border-b-2 skillup-border-color-primary skillup-text-color-primary" : "")}>
                <Icon />
                <span className="headerTab__title ml-2">{this.props.title}</span>
            </div>
        );
    }
}
