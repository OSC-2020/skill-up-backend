import React, { Component } from 'react';
import { IconType } from 'react-icons';
import { Link, NavLink } from 'react-router-dom';

interface Props {
    title: string;
    Icon: IconType;
    naviagetTo: string;
    exactMatch?: boolean;
}

export default class HeaderTab extends Component<Props> {

    render() {
        const Icon = this.props.Icon;
        return (

            <NavLink exact={!!this.props.exactMatch} activeClassName="border-b-2 skillup-border-color-primary skillup-text-color-primary" to={this.props.naviagetTo} >
                <div className="flex items-center p-3 mr-1 transition-colors font-medium hover:rounded-md hover:skillup-text-color-primary hover:skillup-background-color-bg ">
                    <Icon />
                    <span className="headerTab__title ml-2">{this.props.title}</span>
                </div>
            </NavLink>
        );
    }
}
