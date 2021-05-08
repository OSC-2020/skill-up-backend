import React, { Component } from 'react';

interface Props {
    scrollBehaviour?: 'auto' | 'smooth';
    children: React.ReactNode;
    className?: string;
}


export default class ScrollToBottom extends Component<Props> {
    messagesEnd: HTMLDivElement | null = null;

    scrollToBottom = () => {
        this.messagesEnd?.scrollIntoView({ behavior: this.props.scrollBehaviour || 'auto' });
    };


    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}
